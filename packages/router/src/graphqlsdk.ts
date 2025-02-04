import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};




export type AssetBalance = {
  __typename?: 'AssetBalance';
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: Router;
};

export type AssetBalance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  router?: Maybe<Scalars['String']>;
  router_not?: Maybe<Scalars['String']>;
  router_gt?: Maybe<Scalars['String']>;
  router_lt?: Maybe<Scalars['String']>;
  router_gte?: Maybe<Scalars['String']>;
  router_lte?: Maybe<Scalars['String']>;
  router_in?: Maybe<Array<Scalars['String']>>;
  router_not_in?: Maybe<Array<Scalars['String']>>;
  router_contains?: Maybe<Scalars['String']>;
  router_not_contains?: Maybe<Scalars['String']>;
  router_starts_with?: Maybe<Scalars['String']>;
  router_not_starts_with?: Maybe<Scalars['String']>;
  router_ends_with?: Maybe<Scalars['String']>;
  router_not_ends_with?: Maybe<Scalars['String']>;
};

export enum AssetBalance_OrderBy {
  Id = 'id',
  Amount = 'amount',
  Router = 'router'
}



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  assetBalance?: Maybe<AssetBalance>;
  assetBalances: Array<AssetBalance>;
  router?: Maybe<Router>;
  routers: Array<Router>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryAssetBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryAssetBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRouterArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRoutersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Router_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Router_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Router = {
  __typename?: 'Router';
  id: Scalars['ID'];
  assetBalances: Array<AssetBalance>;
  transactions: Array<Transaction>;
};


export type RouterAssetBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBalance_Filter>;
};


export type RouterTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
};

export type Router_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Router_OrderBy {
  Id = 'id',
  AssetBalances = 'assetBalances',
  Transactions = 'transactions'
}

export type Subscription = {
  __typename?: 'Subscription';
  assetBalance?: Maybe<AssetBalance>;
  assetBalances: Array<AssetBalance>;
  router?: Maybe<Router>;
  routers: Array<Router>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionAssetBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionAssetBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AssetBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AssetBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRouterArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRoutersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Router_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Router_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  user: User;
  router: Router;
  amount: Scalars['BigInt'];
  sendingAssetId: Scalars['Bytes'];
  receivingAssetId: Scalars['Bytes'];
  sendingChainId: Scalars['BigInt'];
  receivingChainId: Scalars['BigInt'];
  receivingAddress: Scalars['Bytes'];
  callData: Scalars['Bytes'];
  transactionId: Scalars['Bytes'];
  expiry: Scalars['BigInt'];
  status: TransactionStatus;
  chainId: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  encodedBid: Scalars['Bytes'];
  bidSignature: Scalars['Bytes'];
  relayerFee?: Maybe<Scalars['BigInt']>;
  signature?: Maybe<Scalars['Bytes']>;
  prepareCaller?: Maybe<Scalars['Bytes']>;
  fulfillCaller?: Maybe<Scalars['Bytes']>;
  cancelCaller?: Maybe<Scalars['Bytes']>;
};

export enum TransactionStatus {
  Prepared = 'Prepared',
  Fulfilled = 'Fulfilled',
  Cancelled = 'Cancelled'
}

export type Transaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  router?: Maybe<Scalars['String']>;
  router_not?: Maybe<Scalars['String']>;
  router_gt?: Maybe<Scalars['String']>;
  router_lt?: Maybe<Scalars['String']>;
  router_gte?: Maybe<Scalars['String']>;
  router_lte?: Maybe<Scalars['String']>;
  router_in?: Maybe<Array<Scalars['String']>>;
  router_not_in?: Maybe<Array<Scalars['String']>>;
  router_contains?: Maybe<Scalars['String']>;
  router_not_contains?: Maybe<Scalars['String']>;
  router_starts_with?: Maybe<Scalars['String']>;
  router_not_starts_with?: Maybe<Scalars['String']>;
  router_ends_with?: Maybe<Scalars['String']>;
  router_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  sendingAssetId?: Maybe<Scalars['Bytes']>;
  sendingAssetId_not?: Maybe<Scalars['Bytes']>;
  sendingAssetId_in?: Maybe<Array<Scalars['Bytes']>>;
  sendingAssetId_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sendingAssetId_contains?: Maybe<Scalars['Bytes']>;
  sendingAssetId_not_contains?: Maybe<Scalars['Bytes']>;
  receivingAssetId?: Maybe<Scalars['Bytes']>;
  receivingAssetId_not?: Maybe<Scalars['Bytes']>;
  receivingAssetId_in?: Maybe<Array<Scalars['Bytes']>>;
  receivingAssetId_not_in?: Maybe<Array<Scalars['Bytes']>>;
  receivingAssetId_contains?: Maybe<Scalars['Bytes']>;
  receivingAssetId_not_contains?: Maybe<Scalars['Bytes']>;
  sendingChainId?: Maybe<Scalars['BigInt']>;
  sendingChainId_not?: Maybe<Scalars['BigInt']>;
  sendingChainId_gt?: Maybe<Scalars['BigInt']>;
  sendingChainId_lt?: Maybe<Scalars['BigInt']>;
  sendingChainId_gte?: Maybe<Scalars['BigInt']>;
  sendingChainId_lte?: Maybe<Scalars['BigInt']>;
  sendingChainId_in?: Maybe<Array<Scalars['BigInt']>>;
  sendingChainId_not_in?: Maybe<Array<Scalars['BigInt']>>;
  receivingChainId?: Maybe<Scalars['BigInt']>;
  receivingChainId_not?: Maybe<Scalars['BigInt']>;
  receivingChainId_gt?: Maybe<Scalars['BigInt']>;
  receivingChainId_lt?: Maybe<Scalars['BigInt']>;
  receivingChainId_gte?: Maybe<Scalars['BigInt']>;
  receivingChainId_lte?: Maybe<Scalars['BigInt']>;
  receivingChainId_in?: Maybe<Array<Scalars['BigInt']>>;
  receivingChainId_not_in?: Maybe<Array<Scalars['BigInt']>>;
  receivingAddress?: Maybe<Scalars['Bytes']>;
  receivingAddress_not?: Maybe<Scalars['Bytes']>;
  receivingAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  receivingAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  receivingAddress_contains?: Maybe<Scalars['Bytes']>;
  receivingAddress_not_contains?: Maybe<Scalars['Bytes']>;
  callData?: Maybe<Scalars['Bytes']>;
  callData_not?: Maybe<Scalars['Bytes']>;
  callData_in?: Maybe<Array<Scalars['Bytes']>>;
  callData_not_in?: Maybe<Array<Scalars['Bytes']>>;
  callData_contains?: Maybe<Scalars['Bytes']>;
  callData_not_contains?: Maybe<Scalars['Bytes']>;
  transactionId?: Maybe<Scalars['Bytes']>;
  transactionId_not?: Maybe<Scalars['Bytes']>;
  transactionId_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionId_not_in?: Maybe<Array<Scalars['Bytes']>>;
  transactionId_contains?: Maybe<Scalars['Bytes']>;
  transactionId_not_contains?: Maybe<Scalars['Bytes']>;
  expiry?: Maybe<Scalars['BigInt']>;
  expiry_not?: Maybe<Scalars['BigInt']>;
  expiry_gt?: Maybe<Scalars['BigInt']>;
  expiry_lt?: Maybe<Scalars['BigInt']>;
  expiry_gte?: Maybe<Scalars['BigInt']>;
  expiry_lte?: Maybe<Scalars['BigInt']>;
  expiry_in?: Maybe<Array<Scalars['BigInt']>>;
  expiry_not_in?: Maybe<Array<Scalars['BigInt']>>;
  status?: Maybe<TransactionStatus>;
  status_not?: Maybe<TransactionStatus>;
  chainId?: Maybe<Scalars['BigInt']>;
  chainId_not?: Maybe<Scalars['BigInt']>;
  chainId_gt?: Maybe<Scalars['BigInt']>;
  chainId_lt?: Maybe<Scalars['BigInt']>;
  chainId_gte?: Maybe<Scalars['BigInt']>;
  chainId_lte?: Maybe<Scalars['BigInt']>;
  chainId_in?: Maybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: Maybe<Array<Scalars['BigInt']>>;
  blockNumber?: Maybe<Scalars['BigInt']>;
  blockNumber_not?: Maybe<Scalars['BigInt']>;
  blockNumber_gt?: Maybe<Scalars['BigInt']>;
  blockNumber_lt?: Maybe<Scalars['BigInt']>;
  blockNumber_gte?: Maybe<Scalars['BigInt']>;
  blockNumber_lte?: Maybe<Scalars['BigInt']>;
  blockNumber_in?: Maybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: Maybe<Array<Scalars['BigInt']>>;
  encodedBid?: Maybe<Scalars['Bytes']>;
  encodedBid_not?: Maybe<Scalars['Bytes']>;
  encodedBid_in?: Maybe<Array<Scalars['Bytes']>>;
  encodedBid_not_in?: Maybe<Array<Scalars['Bytes']>>;
  encodedBid_contains?: Maybe<Scalars['Bytes']>;
  encodedBid_not_contains?: Maybe<Scalars['Bytes']>;
  bidSignature?: Maybe<Scalars['Bytes']>;
  bidSignature_not?: Maybe<Scalars['Bytes']>;
  bidSignature_in?: Maybe<Array<Scalars['Bytes']>>;
  bidSignature_not_in?: Maybe<Array<Scalars['Bytes']>>;
  bidSignature_contains?: Maybe<Scalars['Bytes']>;
  bidSignature_not_contains?: Maybe<Scalars['Bytes']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  relayerFee_not?: Maybe<Scalars['BigInt']>;
  relayerFee_gt?: Maybe<Scalars['BigInt']>;
  relayerFee_lt?: Maybe<Scalars['BigInt']>;
  relayerFee_gte?: Maybe<Scalars['BigInt']>;
  relayerFee_lte?: Maybe<Scalars['BigInt']>;
  relayerFee_in?: Maybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  signature?: Maybe<Scalars['Bytes']>;
  signature_not?: Maybe<Scalars['Bytes']>;
  signature_in?: Maybe<Array<Scalars['Bytes']>>;
  signature_not_in?: Maybe<Array<Scalars['Bytes']>>;
  signature_contains?: Maybe<Scalars['Bytes']>;
  signature_not_contains?: Maybe<Scalars['Bytes']>;
  prepareCaller?: Maybe<Scalars['Bytes']>;
  prepareCaller_not?: Maybe<Scalars['Bytes']>;
  prepareCaller_in?: Maybe<Array<Scalars['Bytes']>>;
  prepareCaller_not_in?: Maybe<Array<Scalars['Bytes']>>;
  prepareCaller_contains?: Maybe<Scalars['Bytes']>;
  prepareCaller_not_contains?: Maybe<Scalars['Bytes']>;
  fulfillCaller?: Maybe<Scalars['Bytes']>;
  fulfillCaller_not?: Maybe<Scalars['Bytes']>;
  fulfillCaller_in?: Maybe<Array<Scalars['Bytes']>>;
  fulfillCaller_not_in?: Maybe<Array<Scalars['Bytes']>>;
  fulfillCaller_contains?: Maybe<Scalars['Bytes']>;
  fulfillCaller_not_contains?: Maybe<Scalars['Bytes']>;
  cancelCaller?: Maybe<Scalars['Bytes']>;
  cancelCaller_not?: Maybe<Scalars['Bytes']>;
  cancelCaller_in?: Maybe<Array<Scalars['Bytes']>>;
  cancelCaller_not_in?: Maybe<Array<Scalars['Bytes']>>;
  cancelCaller_contains?: Maybe<Scalars['Bytes']>;
  cancelCaller_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum Transaction_OrderBy {
  Id = 'id',
  User = 'user',
  Router = 'router',
  Amount = 'amount',
  SendingAssetId = 'sendingAssetId',
  ReceivingAssetId = 'receivingAssetId',
  SendingChainId = 'sendingChainId',
  ReceivingChainId = 'receivingChainId',
  ReceivingAddress = 'receivingAddress',
  CallData = 'callData',
  TransactionId = 'transactionId',
  Expiry = 'expiry',
  Status = 'status',
  ChainId = 'chainId',
  BlockNumber = 'blockNumber',
  EncodedBid = 'encodedBid',
  BidSignature = 'bidSignature',
  RelayerFee = 'relayerFee',
  Signature = 'signature',
  PrepareCaller = 'prepareCaller',
  FulfillCaller = 'fulfillCaller',
  CancelCaller = 'cancelCaller'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  transactions: Array<Transaction>;
};


export type UserTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
};

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Id = 'id',
  Transactions = 'transactions'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetSenderPrepareTransactionsQueryVariables = Exact<{
  routerId: Scalars['String'];
  sendingChainId: Scalars['BigInt'];
}>;


export type GetSenderPrepareTransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount' | 'sendingAssetId' | 'receivingAssetId' | 'sendingChainId' | 'receivingChainId' | 'receivingAddress' | 'callData' | 'transactionId' | 'expiry' | 'status' | 'chainId' | 'blockNumber' | 'encodedBid' | 'bidSignature'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ), router: (
      { __typename?: 'Router' }
      & Pick<Router, 'id'>
    ) }
  )> }
);

export type GetReceiverPrepareTransactionsQueryVariables = Exact<{
  routerId: Scalars['String'];
  receivingChainId: Scalars['BigInt'];
}>;


export type GetReceiverPrepareTransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount' | 'sendingAssetId' | 'receivingAssetId' | 'sendingChainId' | 'receivingChainId' | 'receivingAddress' | 'callData' | 'transactionId' | 'expiry' | 'status' | 'chainId' | 'blockNumber' | 'encodedBid' | 'bidSignature'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ), router: (
      { __typename?: 'Router' }
      & Pick<Router, 'id'>
    ) }
  )> }
);

export type GetReceiverFulfillTransactionsQueryVariables = Exact<{
  routerId: Scalars['String'];
  receivingChainId: Scalars['BigInt'];
}>;


export type GetReceiverFulfillTransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount' | 'sendingAssetId' | 'receivingAssetId' | 'sendingChainId' | 'receivingChainId' | 'receivingAddress' | 'callData' | 'transactionId' | 'expiry' | 'status' | 'chainId' | 'blockNumber' | 'encodedBid' | 'bidSignature' | 'relayerFee' | 'signature'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ), router: (
      { __typename?: 'Router' }
      & Pick<Router, 'id'>
    ) }
  )> }
);

export type GetSenderTransactionQueryVariables = Exact<{
  transactionId: Scalars['Bytes'];
  sendingChainId: Scalars['BigInt'];
}>;


export type GetSenderTransactionQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount' | 'sendingAssetId' | 'receivingAssetId' | 'sendingChainId' | 'receivingChainId' | 'receivingAddress' | 'callData' | 'transactionId' | 'expiry' | 'status' | 'chainId' | 'blockNumber' | 'encodedBid' | 'bidSignature' | 'relayerFee' | 'signature'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ), router: (
      { __typename?: 'Router' }
      & Pick<Router, 'id'>
    ) }
  )> }
);

export type GetReceiverTransactionQueryVariables = Exact<{
  transactionId: Scalars['Bytes'];
  receivingChainId: Scalars['BigInt'];
}>;


export type GetReceiverTransactionQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount' | 'sendingAssetId' | 'receivingAssetId' | 'sendingChainId' | 'receivingChainId' | 'receivingAddress' | 'callData' | 'transactionId' | 'expiry' | 'status' | 'chainId' | 'blockNumber' | 'encodedBid' | 'bidSignature' | 'relayerFee' | 'signature'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ), router: (
      { __typename?: 'Router' }
      & Pick<Router, 'id'>
    ) }
  )> }
);

export type GetSenderFulfillTransactionsQueryVariables = Exact<{
  routerId: Scalars['String'];
  sendingChainId: Scalars['BigInt'];
}>;


export type GetSenderFulfillTransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'amount' | 'sendingAssetId' | 'receivingAssetId' | 'sendingChainId' | 'receivingChainId' | 'receivingAddress' | 'callData' | 'transactionId' | 'expiry' | 'status' | 'chainId' | 'blockNumber' | 'encodedBid' | 'bidSignature' | 'relayerFee' | 'signature'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ), router: (
      { __typename?: 'Router' }
      & Pick<Router, 'id'>
    ) }
  )> }
);


export const GetSenderPrepareTransactionsDocument = gql`
    query GetSenderPrepareTransactions($routerId: String!, $sendingChainId: BigInt!) {
  transactions(
    where: {router: $routerId, sendingChainId: $sendingChainId, chainId: $sendingChainId, status: Prepared}
  ) {
    id
    user {
      id
    }
    router {
      id
    }
    amount
    sendingAssetId
    receivingAssetId
    sendingChainId
    receivingChainId
    receivingAddress
    callData
    transactionId
    expiry
    status
    chainId
    blockNumber
    encodedBid
    bidSignature
  }
}
    `;
export const GetReceiverPrepareTransactionsDocument = gql`
    query GetReceiverPrepareTransactions($routerId: String!, $receivingChainId: BigInt!) {
  transactions(
    where: {router: $routerId, receivingChainId: $receivingChainId, chainId: $receivingChainId, status: Prepared}
  ) {
    id
    user {
      id
    }
    router {
      id
    }
    amount
    sendingAssetId
    receivingAssetId
    sendingChainId
    receivingChainId
    receivingAddress
    callData
    transactionId
    expiry
    status
    chainId
    blockNumber
    encodedBid
    bidSignature
  }
}
    `;
export const GetReceiverFulfillTransactionsDocument = gql`
    query GetReceiverFulfillTransactions($routerId: String!, $receivingChainId: BigInt!) {
  transactions(
    where: {router: $routerId, receivingChainId: $receivingChainId, chainId: $receivingChainId, status: Fulfilled}
  ) {
    id
    user {
      id
    }
    router {
      id
    }
    amount
    sendingAssetId
    receivingAssetId
    sendingChainId
    receivingChainId
    receivingAddress
    callData
    transactionId
    expiry
    status
    chainId
    blockNumber
    encodedBid
    bidSignature
    relayerFee
    signature
  }
}
    `;
export const GetSenderTransactionDocument = gql`
    query GetSenderTransaction($transactionId: Bytes!, $sendingChainId: BigInt!) {
  transactions(
    where: {transactionId: $transactionId, sendingChainId: $sendingChainId, chainId: $sendingChainId}
  ) {
    id
    user {
      id
    }
    router {
      id
    }
    amount
    sendingAssetId
    receivingAssetId
    sendingChainId
    receivingChainId
    receivingAddress
    callData
    transactionId
    expiry
    status
    chainId
    blockNumber
    encodedBid
    bidSignature
    relayerFee
    signature
  }
}
    `;
export const GetReceiverTransactionDocument = gql`
    query GetReceiverTransaction($transactionId: Bytes!, $receivingChainId: BigInt!) {
  transactions(
    where: {transactionId: $transactionId, receivingChainId: $receivingChainId, chainId: $receivingChainId}
  ) {
    id
    user {
      id
    }
    router {
      id
    }
    amount
    sendingAssetId
    receivingAssetId
    sendingChainId
    receivingChainId
    receivingAddress
    callData
    transactionId
    expiry
    status
    chainId
    blockNumber
    encodedBid
    bidSignature
    relayerFee
    signature
  }
}
    `;
export const GetSenderFulfillTransactionsDocument = gql`
    query GetSenderFulfillTransactions($routerId: String!, $sendingChainId: BigInt!) {
  transactions(
    where: {router: $routerId, sendingChainId: $sendingChainId, chainId: $sendingChainId, status: Fulfilled}
  ) {
    id
    user {
      id
    }
    router {
      id
    }
    amount
    sendingAssetId
    receivingAssetId
    sendingChainId
    receivingChainId
    receivingAddress
    callData
    transactionId
    expiry
    status
    chainId
    blockNumber
    encodedBid
    bidSignature
    relayerFee
    signature
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetSenderPrepareTransactions(variables: GetSenderPrepareTransactionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSenderPrepareTransactionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSenderPrepareTransactionsQuery>(GetSenderPrepareTransactionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSenderPrepareTransactions');
    },
    GetReceiverPrepareTransactions(variables: GetReceiverPrepareTransactionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetReceiverPrepareTransactionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetReceiverPrepareTransactionsQuery>(GetReceiverPrepareTransactionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetReceiverPrepareTransactions');
    },
    GetReceiverFulfillTransactions(variables: GetReceiverFulfillTransactionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetReceiverFulfillTransactionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetReceiverFulfillTransactionsQuery>(GetReceiverFulfillTransactionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetReceiverFulfillTransactions');
    },
    GetSenderTransaction(variables: GetSenderTransactionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSenderTransactionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSenderTransactionQuery>(GetSenderTransactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSenderTransaction');
    },
    GetReceiverTransaction(variables: GetReceiverTransactionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetReceiverTransactionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetReceiverTransactionQuery>(GetReceiverTransactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetReceiverTransaction');
    },
    GetSenderFulfillTransactions(variables: GetSenderFulfillTransactionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSenderFulfillTransactionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSenderFulfillTransactionsQuery>(GetSenderFulfillTransactionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSenderFulfillTransactions');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;