"use strict";
exports.__esModule = true;
var Account = /** @class */ (function () {
    function Account(name, password) {
        var _this = this;
        this.toString = function () {
            return "".concat(_this.name, ",").concat(_this.password);
        };
        this.name = name;
        this.password = password;
    }
    Account.prototype.getname = function () {
        return this.name;
    };
    Account.prototype.setname = function (value) {
        this.name = value;
    };
    Account.prototype.getpassword = function () {
        return this.password;
    };
    Account.prototype.setpassword = function (value) {
        this.password = value;
    };
    return Account;
}());
exports["default"] = Account;
var account = new Account("Ngoc", "123");
account.toString();
