/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class TransactionCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.TransactionRecord>> {
    constructor(serverUrl: uri.URI);
    transaction(transactionId: string): this;
    forAccount(accountId: string): this;
    forLedger(sequence: number | string): this;
    includeFailed(value: boolean): this;
}
