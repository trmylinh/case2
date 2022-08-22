// import AccountManagement from "../controller/AccountManagement";
// import * as readlineSync from 'readline-sync';
const readlineSync = require("readline-sync");
const accountManagement = require("../controller/AccountManagement");
class MenuAccount {
    // private accountManagement : AccountManagement = new AccountManagement();

    constructor() {
        console.log(accountManagement);
        // this.accountManagement.signIn();
        this.init();
        // console.log(AccountManagement);
    }

     init() {
        console.log(`
        --------------- Menu ------------------
        1. Sign up
        2. Sign in
        3. Exit
        ----------------------------------------
        `);

        let choice: number = 0;
        let regex: RegExp = /^[1-3]$/;
        // let readlineSync = require('readline-sync');

        while (choice < 1 || choice > 3) {

            let choose = readlineSync.question("Choose your option:");
            if (regex.test(choose)) {
                choice = +(choose);
                // console.log("Right");
            } else {
                choice = -1;
                console.log("Please choose between 1 and 3!!!");
            }
        }

        switch (choice) {
            case 1:
                accountManagement.displayAccount();
                break;
            case 2:
                // this.acountManagement.displayAccount();
                // this.accountManagement.signIn();
                // console.log("Sign in");
                // console.log(this.accountManagement)
                break;
            case 3:
                return;
        }

    }
}

let menuAccount = new MenuAccount();
// menuAccount.init();
