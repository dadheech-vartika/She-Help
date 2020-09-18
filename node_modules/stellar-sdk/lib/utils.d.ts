import { Keypair, Transaction } from "stellar-base";
export declare namespace Utils {
    function buildChallengeTx(serverKeypair: Keypair, clientAccountID: string, anchorName: string, timeout?: number, networkPassphrase?: string): string;
    function verifyChallengeTx(challengeTx: string, serverAccountId: string, networkPassphrase?: string): boolean;
    function verifyTxSignedBy(transaction: Transaction, accountId: string): boolean;
}
