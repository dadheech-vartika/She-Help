"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Horizon;
(function (Horizon) {
    var OperationResponseType;
    (function (OperationResponseType) {
        OperationResponseType["createAccount"] = "create_account";
        OperationResponseType["payment"] = "payment";
        OperationResponseType["pathPayment"] = "path_payment";
        OperationResponseType["createPassiveOffer"] = "create_passive_offer";
        OperationResponseType["manageOffer"] = "manage_offer";
        OperationResponseType["setOptions"] = "set_options";
        OperationResponseType["changeTrust"] = "change_trust";
        OperationResponseType["allowTrust"] = "allow_trust";
        OperationResponseType["accountMerge"] = "account_merge";
        OperationResponseType["inflation"] = "inflation";
        OperationResponseType["manageData"] = "manage_data";
        OperationResponseType["bumpSequence"] = "bump_sequence";
    })(OperationResponseType = Horizon.OperationResponseType || (Horizon.OperationResponseType = {}));
    var OperationResponseTypeI;
    (function (OperationResponseTypeI) {
        OperationResponseTypeI[OperationResponseTypeI["createAccount"] = 0] = "createAccount";
        OperationResponseTypeI[OperationResponseTypeI["payment"] = 1] = "payment";
        OperationResponseTypeI[OperationResponseTypeI["pathPayment"] = 2] = "pathPayment";
        OperationResponseTypeI[OperationResponseTypeI["createPassiveOffer"] = 3] = "createPassiveOffer";
        OperationResponseTypeI[OperationResponseTypeI["manageOffer"] = 4] = "manageOffer";
        OperationResponseTypeI[OperationResponseTypeI["setOptions"] = 5] = "setOptions";
        OperationResponseTypeI[OperationResponseTypeI["changeTrust"] = 6] = "changeTrust";
        OperationResponseTypeI[OperationResponseTypeI["allowTrust"] = 7] = "allowTrust";
        OperationResponseTypeI[OperationResponseTypeI["accountMerge"] = 8] = "accountMerge";
        OperationResponseTypeI[OperationResponseTypeI["inflation"] = 9] = "inflation";
        OperationResponseTypeI[OperationResponseTypeI["manageData"] = 10] = "manageData";
        OperationResponseTypeI[OperationResponseTypeI["bumpSequence"] = 11] = "bumpSequence";
    })(OperationResponseTypeI = Horizon.OperationResponseTypeI || (Horizon.OperationResponseTypeI = {}));
    var TransactionFailedResultCodes;
    (function (TransactionFailedResultCodes) {
        TransactionFailedResultCodes["TX_FAILED"] = "tx_failed";
        TransactionFailedResultCodes["TX_BAD_SEQ"] = "tx_bad_seq";
        TransactionFailedResultCodes["TX_BAD_AUTH"] = "tx_bad_auth";
        TransactionFailedResultCodes["TX_BAD_AUTH_EXTRA"] = "tx_bad_auth_extra";
    })(TransactionFailedResultCodes = Horizon.TransactionFailedResultCodes || (Horizon.TransactionFailedResultCodes = {}));
})(Horizon = exports.Horizon || (exports.Horizon = {}));
//# sourceMappingURL=horizon_api.js.map