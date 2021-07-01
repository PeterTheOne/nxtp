import { delay, jsonifyError } from "@connext/nxtp-utils";
import { BigNumber, providers } from "ethers";
import { BaseLogger } from "pino";

import { TransactionServiceConfig } from "./config";
import { ChainError } from "./error";
import { ChainRpcProvider } from "./provider";
import { FullTransaction, MinimalTransaction } from "./types";

export class Transaction {

  public responses: providers.TransactionResponse[] = [];
  public receipt?: providers.TransactionReceipt;
  public nonce?: number;
  public nonceExpired = false;

  // TODO: Not a fan of this arrangement, this code could be tightened up a bit.
  public get gasPrice(): Promise<BigNumber> {
    return this.getGasPrice();
  }
  private _gasPrice?: BigNumber;

  public get fullTransaction(): Promise<FullTransaction> {
    return new Promise(async (resolve) => 
      resolve({
        ...this.minTx,
        gasPrice: await this.gasPrice,
        nonce: this.nonce,
      })
    );
  }

  constructor(
    private readonly log: BaseLogger,
    private readonly provider: ChainRpcProvider,
    private readonly minTx: MinimalTransaction,
    private readonly config: TransactionServiceConfig,
    initialGasPrice?: BigNumber,
  ) {
    this._gasPrice = initialGasPrice;
  }

  public async send() {
    const method = this.send.name;

    // Sanity check to make sure nonce is not expired.
    if (this.nonceExpired) {
      throw new ChainError(ChainError.reasons.NonceExpired, { method });
    }
    
    const fullTransaction = await this.fullTransaction;
    this.log.info(
      {
        method,
        ...fullTransaction,
        gasPrice: fullTransaction.gasPrice.toString(),
      },
      "Attempting to send transaction.",
    );
    const { response: _response, success } = await this.provider.sendTransaction(await this.fullTransaction);
    if (!success) {
      const error = _response as Error;
      if (
        this.responses.length >= 1 &&
        (error.message.includes("nonce has already been used") ||
          // If we get a 'nonce is too low' message, a previous tx has been mined, and ethers thought
          // we were making another tx attempt with the same nonce.
          error.message.includes("Transaction nonce is too low.") ||
          // Another ethers message that we could potentially be getting back.
          error.message.includes("There is another transaction with same nonce in the queue."))
      ) {
        this.nonceExpired = true;
        this.log.info(
          {
            method,
            ...fullTransaction,
            gasPrice: fullTransaction.gasPrice.toString(),
            error: error.message,
          },
          "Nonce already used.",
        );
      } else {
        this.log.error({ method, error }, "Failed to send tx");
        throw _response;
      }
    }
    const response = _response as providers.TransactionResponse;

    // Save nonce if applicable.
    if (this.nonce === undefined) {
      this.nonce = response.nonce;
    }
    // TODO: Should we be checking for wild case where this.nonce !== response.nonce?

    // Add this response to our local response history.
    this.responses.push(response);

    this.log.info(
      {
        method,
        hash: response.hash,
        gas: (response.gasPrice ?? "unknown").toString(),
        nonce: response.nonce,
      },
      "Tx submitted",
    );
  }

  public async confirm() {
    const { confirmationTimeout, confirmationTimeoutExtensionMultiplier } = this.config;
    // A flag for marking when we have received at least 1 confirmation. We'll extend the wait period
    // if this is the case.
    let receivedConfirmation = false;
    let attempts = 0;

    // An anon fn to get the tx receipts for all responses.
    // We must check for confirmation in all previous transactions. Although it's most likely
    // that it's the previous one, any of them could have been confirmed.
    const waitForReceipt = async (): Promise<providers.TransactionReceipt | undefined> => {
      attempts += 1;
      // Save all reverted receipts for a check in case our Promise.race evaluates to be undefined.
      const reverted: providers.TransactionReceipt[] = [];
      // Make a pool of promises for resolving each receipt call (once it reaches target confirmations).
      const receipt = await Promise.race<any>(
        this.responses
          .map((response) => {
            return new Promise(async (resolve) => {
              const r = await this.provider.confirmTransaction(response.hash, confirmationTimeout);
              if (r) {
                if (r.status === 0) {
                  reverted.push(r);
                } else if (r.confirmations >= this.provider.confirmationsRequired) {
                  return resolve(r);
                } else if (r.confirmations >= 1) {
                  receivedConfirmation = true;
                }
              }
            });
          })
          // Add a promise returning undefined with a delay of <timeout> to the pool.
          // This will execute in the event that none of the provider.getTransactionReceipt calls work,
          // and/or none of them have the number of confirmations we want.
          .concat(delay(confirmationTimeout)),
      );
      if (!receivedConfirmation && reverted.length === this.responses.length) {
        // We know every tx was reverted.
        // NOTE: The first reverted receipt in the array will be entirely arbitrary.
        // TODO: Should we return the reverted receipt belonging to the latest (i.e. last sent) tx instead?
        return reverted[0];
      }
      return receipt;
    };

    // Initial poll for receipt.
    let receipt: providers.TransactionReceipt | undefined = await waitForReceipt();
    // If we received confirmation, wait for X more iterations.
    while (!receipt && receivedConfirmation && attempts <= confirmationTimeoutExtensionMultiplier) {
      receipt = await waitForReceipt();
    }

    // If there is still no receipt, we timed out in our polling operation.
    if (!receipt) {
      throw new ChainError(ChainError.reasons.ConfirmationTimeout);
    }

    return receipt;
  }

  // TODO: Move to pure getter.
  private async getGasPrice(): Promise<BigNumber> {
    if (this._gasPrice) {
      return this._gasPrice;
    } else {
      let price: BigNumber | undefined;
      try {
        price = await this.provider.getGasPrice();
      } catch (e) {
        // NOTE: This should be a VectorError thrown here by this.getGasPrice.
        this.log.error(
          { chainId: this.provider.chainId, error: jsonifyError(e) },
          "getGasPrice failure, attempting to default to backup gas value."
        );
        price = this.config.chainInitialGas.get(this.provider.chainId);
        // Default to initial gas price, if available. Otherwise, throw.
        if (!price) {
          throw e;
        }
      }
      return price;
    }
  }

  public async bumpGasPrice() {
    const currentPrice = await this.gasPrice;
    // Scale up gas by percentage as specified by config.
    const bumpedGasPrice = currentPrice.add(currentPrice.mul(this.config.gasReplacementBumpPercent).div(100)).add(1);
    const { gasLimit } = this.config;
    // if the gas price is past the max, throw.
    if (bumpedGasPrice.gt(gasLimit)) {
      const error = new ChainError(ChainError.reasons.MaxGasPriceReached, {
        gasPrice: bumpedGasPrice.toString(),
        max: gasLimit.toString(),
      });
      throw error;
    }
    this._gasPrice = bumpedGasPrice;
    this.log.info(
      {
        method: this.bumpGasPrice.name,
        previousGasPrice: currentPrice.toString(),
        newGasPrice: bumpedGasPrice.toString(),
      },
      "Bumping tx gas price for reattempt.",
    );
  }
}