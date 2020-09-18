"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var randombytes_1 = tslib_1.__importDefault(require("randombytes"));
var stellar_base_1 = require("stellar-base");
var errors_1 = require("./errors");
var Utils;
(function (Utils) {
    function buildChallengeTx(serverKeypair, clientAccountID, anchorName, timeout, networkPassphrase) {
        if (timeout === void 0) { timeout = 300; }
        var account = new stellar_base_1.Account(serverKeypair.publicKey(), "-1");
        var now = Math.floor(Date.now() / 1000);
        var value = randombytes_1.default(48).toString("base64");
        var transaction = new stellar_base_1.TransactionBuilder(account, {
            fee: stellar_base_1.BASE_FEE,
            networkPassphrase: networkPassphrase,
            timebounds: {
                minTime: now,
                maxTime: now + timeout,
            },
        })
            .addOperation(stellar_base_1.Operation.manageData({
            name: anchorName + " auth",
            value: value,
            source: clientAccountID,
        }))
            .build();
        transaction.sign(serverKeypair);
        return transaction
            .toEnvelope()
            .toXDR("base64")
            .toString();
    }
    Utils.buildChallengeTx = buildChallengeTx;
    function verifyChallengeTx(challengeTx, serverAccountId, networkPassphrase) {
        var transaction = new stellar_base_1.Transaction(challengeTx, networkPassphrase);
        var sequence = Number.parseInt(transaction.sequence, 10);
        if (sequence !== 0) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction sequence number should be zero");
        }
        if (transaction.source !== serverAccountId) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction source account is not equal to the server's account");
        }
        if (transaction.operations.length !== 1) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction should contain only one operation");
        }
        var operation = transaction.operations[0];
        if (!operation.source) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction's operation should contain a source account");
        }
        if (operation.type !== "manageData") {
            throw new errors_1.InvalidSep10ChallengeError("The transaction's operation should be manageData");
        }
        if (Buffer.from(operation.value.toString(), "base64").length !== 48) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction's operation value should be a 64 bytes base64 random string");
        }
        if (!verifyTxSignedBy(transaction, serverAccountId)) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction is not signed by the server");
        }
        if (!verifyTxSignedBy(transaction, operation.source)) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction is not signed by the client");
        }
        if (!validateTimebounds(transaction)) {
            throw new errors_1.InvalidSep10ChallengeError("The transaction has expired");
        }
        return true;
    }
    Utils.verifyChallengeTx = verifyChallengeTx;
    function verifyTxSignedBy(transaction, accountId) {
        var hashedSignatureBase = transaction.hash();
        var keypair = stellar_base_1.Keypair.fromPublicKey(accountId);
        return !!transaction.signatures.find(function (sig) {
            return keypair.verify(hashedSignatureBase, sig.signature());
        });
    }
    Utils.verifyTxSignedBy = verifyTxSignedBy;
    function validateTimebounds(transaction) {
        if (!transaction.timeBounds) {
            return false;
        }
        var now = Math.floor(Date.now() / 1000);
        var _a = transaction.timeBounds, minTime = _a.minTime, maxTime = _a.maxTime;
        return (now >= Number.parseInt(minTime, 10) && now <= Number.parseInt(maxTime, 10));
    }
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=utils.js.map