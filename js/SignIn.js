"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SignIn = /** @class */ (function () {
    function SignIn() {
    }
    Object.defineProperty(SignIn.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "getTandC", {
        get: function () {
            return this.TandC;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "setPassword", {
        set: function (password) {
            this.password = password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignIn.prototype, "setTandC", {
        set: function (TandC) {
            this.TandC = TandC;
        },
        enumerable: true,
        configurable: true
    });
    return SignIn;
}());
exports.default = SignIn;
