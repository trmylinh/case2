import AccountManagement from "../controller/AccountManagement";
import MenuUser from "./MenuUser";

// import * as readlineSync from 'readline-sync';
const readlineSync = require("readline-sync");
// const accountManagement = require("../controller/AccountManagement");
export default class MenuAccount {
    private accountManagament : AccountManagement = new AccountManagement();
    private menuUser : MenuUser;

    constructor() {
        this.init();

    }

     private init() {
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
                this.accountManagament.addAccount();
                this.init();
                break;
            case 2:
                this.accountManagament.signIn();
                // this.menuUser = new MenuUser();
                break;
            case 3:
                console.log("GoodBye and See you soon!");
                return;
        }

    }
}

// let menu = new MenuAccount();
// menuAccount.init();
