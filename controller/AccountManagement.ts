import Account  from "../model/Account";
import User from "../model/User";
// import * as readlineSync from 'readline-sync';
import IOFile from "../IOFile";
import MenuAdmin from "../view/MenuAdmin";
import MenuUser from "../view/MenuUser";
const readlineSync = require("readline-sync");
export default class AccountManagement{
    private accountList : Array<Account> = new Array<Account>();
    private fileAccount = new IOFile();
    private PATH = "./data/Account.txt";
    private menuAdmin : MenuAdmin;
    private menuUser : MenuUser;
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
            let userName : string = readlineSync.question("Please enter your fullname:");
            let userAge : number = readlineSync.question("Please enter your age:");
            let userAddress : string = readlineSync.question("Please enter your address:");
            let user : User = new User(userName,userAge,userAddress);
            console.log("Create Account Success!");
            return new Account(name, password,user);
    }

    checkUsername(name : string) : boolean{
        let check : boolean = false;
        this.accountList.forEach((e) =>{
            if(e.getName() == name){
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
            if(e.getName() == name && e.getPassword() == password) {
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
            let userName = e.split(',')[2];
            let userAge = +(e.split(',')[3]);
            let userAddress = e.split(',')[4];
            let user = new User(userName,userAge,userAddress);
            this.accountList.push(new Account(name,password,user));
        })
    }
    addAccount() : void{
        // this.getData();
        let account :  Account = this.createAccount();
       this.accountList.push(account)
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
            this.menuUser = new MenuUser();

        }
        else if (this.checkAdmin(name)){
            console.log("------------Admin Success!----------------");
            this.menuAdmin = new MenuAdmin();
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
            if(this.accountList[i].getName() == name){
                delete this.accountList[i];
            }
        }
        this.fileAccount.writeFile(this.PATH,this.accountList);
    }
}

// // module.exports = new AccountManagement();
// const accountManagement = new AccountManagement();
// console.log(accountManagement);
// accountManagement.addAccount();
// accountManagement.signIn();
// // accountManagement.deleteAccount();
// accountManagement.displayAccount();

// them tk 1 vao thi no ghi vao text
// tk1 luu tk vao array
// them tk 2 vao array
