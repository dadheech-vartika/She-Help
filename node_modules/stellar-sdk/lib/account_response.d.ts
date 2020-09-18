import { Omit } from "utility-types";
import { Horizon } from "./horizon_api";
import { ServerApi } from "./server_api";
export declare class AccountResponse implements Omit<ServerApi.AccountRecord, "_links"> {
    readonly id: string;
    readonly paging_token: string;
    readonly account_id: string;
    sequence: string;
    readonly subentry_count: number;
    readonly inflation_destination: string;
    readonly last_modified_ledger: number;
    readonly thresholds: Horizon.AccountThresholds;
    readonly flags: Horizon.Flags;
    readonly balances: Horizon.BalanceLine[];
    readonly signers: ServerApi.AccountRecordSigners[];
    readonly data: (options: {
        value: string;
    }) => Promise<{
        value: string;
    }>;
    readonly data_attr: Record<string, string>;
    readonly effects: ServerApi.CallCollectionFunction<ServerApi.EffectRecord>;
    readonly offers: ServerApi.CallCollectionFunction<ServerApi.OfferRecord>;
    readonly operations: ServerApi.CallCollectionFunction<ServerApi.OperationRecord>;
    readonly payments: ServerApi.CallCollectionFunction<ServerApi.PaymentOperationRecord>;
    readonly trades: ServerApi.CallCollectionFunction<ServerApi.TradeRecord>;
    private readonly _baseAccount;
    constructor(response: ServerApi.AccountRecord);
    accountId(): string;
    sequenceNumber(): string;
    incrementSequenceNumber(): void;
}
