/// <reference types="urijs" />
import { CallBuilder } from "./call_builder";
import { ServerApi } from "./server_api";
export declare class OfferCallBuilder extends CallBuilder<ServerApi.CollectionPage<ServerApi.OfferRecord>> {
    constructor(serverUrl: uri.URI, resource: string, ...resourceParams: string[]);
}
