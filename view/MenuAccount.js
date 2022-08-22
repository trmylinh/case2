"use strict";
exports.__esModule = true;
// import * as rl from 'readline-sync';
var MenuAccount = /** @class */ (function () {
    function MenuAccount() {
        this.init();
    }
    MenuAccount.prototype.init = function () {
        var menu = "\n        --------------- Menu ------------------\n        1. Sign up\n        2. Sign in\n        3. Exit\n        ----------------------------------------\n        ";
        console.log(menu);
        var choice = 0;
        var regex = /^[1-3]$/;
        var readlineSync = require('readline-sync');
        while (choice < 1 || choice > 3) {
            var choose = readlineSync.question("Choose your option:");
            if (regex.test(choose)) {
                choice = +(choose);
                console.log("Right");
            }
            else {
                choice = -1;
                console.log("Please choose between 1 and 3!!!");
            }
        }
    };
    return MenuAccount;
}());
var menuAccount = new MenuAccount();
