import Account  from "../model/Account";
import User from "../model/User";
// import * as readlineSync from 'readline-sync';
import IOFile from "../IOFile";
const readlineSync = require("readline-sync");
class AccountManagement{
    private accountList : Array<Account> = new Array<Account>();

    private fileAccount = new IOFile();
    private PATH = "./data/Account.txt";

    constructor() {
        this.getData();
    }

    createAccount() : Account{
        let name : string;
        let password : string;
        let readlineSync = require("readline-sync");
        name = readlineSync.question("Please enter username:");
        while(this.checkUsername(name)){
            console.log("Username is already exist!\n");
            name = readlineSync.question("Please enter username:");
        }
        while(this.checkAdmin(name)){
            console.log("Admin Account!");
            name = readlineSync.question("Please enter username:");
        }
        password = readlineSync.question("Please enter password:");
        let regex : RegExp = /^[a-zA-Z0-9]{3,6}$/;
        let check : boolean = regex.test(password);
        while(!check){
            console.log("Invalid password!");
            password = readlineSync.question("Please enter password:");
            check = regex.test(password);
        }
        console.log("Create Account Success!");
        return new Account(name, password);
    }

    checkUsername(name : string) : boolean{
        let check : boolean = false;
        this.accountList.forEach((e) =>{
            if(e.getname() == name){
                check = true;
            }
        })
        return check;
    }

    checkAdmin(name : string) : boolean{
        if(name == "admin"){
            return true;
        }
        return false;
    }

    checkAccount(name : string, password : string) : boolean{
        // console.log(this.accountList);
        let check : boolean = false;
        this.accountList.forEach((e) =>{
            if(e.getname() == name && e.getpassword() == password) {
                check = true;
            }

        });
        return check;
    }
    getData():void{
        let  data = this.fileAccount.readFile(this.PATH);
        data.forEach(e=>{
            let name = e.split(',')[0];
            let password = e.split(',')[1];
            this.accountList.push(new Account(name,password));
        })
    }
    addAccount() : void{
        // this.getData();
        let account :  Account = this.createAccount();
        this.accountList.push(account);
        this.fileAccount.writeFile(this.PATH,this.accountList);
    }

    signIn() : void{
        // // let readlineSync = require("readline-sync");
        // let data = this.fileAccount.readFile(this.PATH);
        // this.getData();
        let name : string = readlineSync.question("Please enter username:");
        let password : string = readlineSync.question("Please enter password:");
        if(this.checkAccount(name,password)){
            console.log("------------ Sign In Success! -----------");
        }
        else if (this.checkAdmin(name)){
            console.log("admin");
        }
        else{
            console.log("------------- Failed! -------------");
        }
    }

    displayAccount() :void{
        let data = this.fileAccount.readFile(this.PATH);
        console.log("Lists of accounts:");
        data.forEach((e) =>{
            console.log(e);
        })

    }

    deleteAccount() : void{
        let name : string = readlineSync.question("Account name you want to delete:");
        for(let i = 0; i < this.accountList.length; i++){
            if(this.accountList[i].getname() == name){
                delete this.accountList[i];
            }
        }
        this.fileAccount.writeFile(this.PATH,this.accountList);
    }
}

module.exports = new AccountManagement();
// const accountManagement = new AccountManagement();
// accountManagement.addAccount();
// accountManagement.signin();
// accountManagement.deleteAccount();
// accountManagement.displayAccount();

// them tk 1 vao thi no ghi vao text
// tk1 luu tk vao array
// them tk 2 vao array
