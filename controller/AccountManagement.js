"use strict";
exports.__esModule = true;
var AccountManagement = /** @class */ (function () {
    // private fileUser =
    function AccountManagement() {
        this.listUser = new Array();
        this.init();
    }
    AccountManagement.prototype.init = function () {
        var menu = "\n        --------------- Menu ------------------\n        1. Sign up\n        2. Sign in\n        3. Exit\n        ----------------------------------------\n        ";
        console.log(menu);
    };
    return AccountManagement;
}());
exports["default"] = AccountManagement;
var accountManagement = new AccountManagement();
// accountManagement.init();
