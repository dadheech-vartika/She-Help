"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var call_builder_1 = require("./call_builder");
var errors_1 = require("./errors");
var OfferCallBuilder = (function (_super) {
    tslib_1.__extends(OfferCallBuilder, _super);
    function OfferCallBuilder(serverUrl, resource) {
        var resourceParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            resourceParams[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, serverUrl) || this;
        if (resource === "accounts") {
            _this.url.segment(tslib_1.__spreadArrays([resource], resourceParams, ["offers"]));
        }
        else {
            throw new errors_1.BadRequestError("Bad resource specified for offer:", resource);
        }
        return _this;
    }
    return OfferCallBuilder;
}(call_builder_1.CallBuilder));
exports.OfferCallBuilder = OfferCallBuilder;
//# sourceMappingURL=offer_call_builder.js.map