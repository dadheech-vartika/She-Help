"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var call_builder_1 = require("./call_builder");
var AccountCallBuilder = (function (_super) {
    tslib_1.__extends(AccountCallBuilder, _super);
    function AccountCallBuilder(serverUrl) {
        var _this = _super.call(this, serverUrl) || this;
        _this.url.segment("accounts");
        return _this;
    }
    AccountCallBuilder.prototype.accountId = function (id) {
        this.filter.push(["accounts", id]);
        return this;
    };
    return AccountCallBuilder;
}(call_builder_1.CallBuilder));
exports.AccountCallBuilder = AccountCallBuilder;
//# sourceMappingURL=account_call_builder.js.map