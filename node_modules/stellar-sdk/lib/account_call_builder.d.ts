/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class AccountCallBuilder extends CallBuilder<ServerApi.AccountRecord> {
    constructor(serverUrl: uri.URI);
    accountId(id: string): this;
}
