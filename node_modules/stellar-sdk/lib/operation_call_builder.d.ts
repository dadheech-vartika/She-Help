/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class OperationCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.OperationRecord>> {
    constructor(serverUrl: uri.URI);
    operation(operationId: string): this;
    forAccount(accountId: string): this;
    forLedger(sequence: number | string): this;
    forTransaction(transactionId: string): this;
    includeFailed(value: boolean): this;
}
