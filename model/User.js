"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userName, userAge, userAddress, userAccount) {
        var _this = this;
        this.toString = function () {
            return "userName: ".concat(_this._userName, ", userAge: ").concat(_this._userAge, ", userAddress: ").concat(_this._userAddress, ", userAccount: ").concat(_this._userAccount);
        };
        this._userName = userName;
        this._userAge = userAge;
        this._userAddress = userAddress;
        this._userAccount = userAccount;
    }
    User.prototype.getuserName = function () {
        return this._userName;
    };
    User.prototype.setuserName = function (value) {
        this._userName = value;
    };
    User.prototype.getuserAge = function () {
        return this._userAge;
    };
    User.prototype.setuserAge = function (value) {
        this._userAge = value;
    };
    User.prototype.getuserAddress = function () {
        return this._userAddress;
    };
    User.prototype.setuserAddress = function (value) {
        this._userAddress = value;
    };
    User.prototype.getuserAccount = function () {
        return this._userAccount;
    };
    User.prototype.setuserAccount = function (value) {
        this._userAccount = value;
    };
    return User;
}());
exports["default"] = User;
// let account1 = new Account("linh","123");
// let user = new User("linh", 20,"Ha Noi", account1);
// console.log(user.getuserAddress());
// console.log(user.toString());
