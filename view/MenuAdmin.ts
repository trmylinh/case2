import ProductManagement from "../controller/ProductManagement";
import MenuAccount from "./MenuAccount";
import Product from "../model/Product";
import AccountManagement from "../controller/AccountManagement";

const readlineSync = require("readline-sync");
export default class MenuAdmin {
    private productManagement : ProductManagement = new ProductManagement();
    private accountManagement : AccountManagement = new AccountManagement();
    private menuAccount : MenuAccount;
    constructor() {
        this.init();
    }

    private init() {
        console.log(`
        --------------- Menu Admin------------------
        *** Account ***
        1. Show lists of accounts
        2. Delete the account
        *** Product ***
        3. Show lists of products
        ~~~~ Edit/Delete By id
        4. Edit size 
        5. Edit amount 
        6. Edit price 
        7. Edit name 
        8. Edit brand 
        9. Delete product
        ~~~~ Search
        10. Search brand
        11. Search name 
        ~~~~ Add
        12. Add more product
        ( 13. Exit ) 
        ----------------------------------------
        `);
        let choice: number = 0;
        let regex: RegExp = /^[0-9]{1,2}$/;
        // let readlineSync = require('readline-sync');

        while (choice < 1 || choice > 13) {
            let choose = readlineSync.question("Choose your option:");
            if (regex.test(choose)) {
                choice = +(choose);
                // console.log("Right");
            } else {
                choice = -1;
                console.log("Please choose between 1 and 13!!!");
            }
        }
        switch (choice) {
            case 1:
                this.accountManagement.displayAccount();
                this.init();
                break;
            case 2:
                this.accountManagement.deleteAccount();
                this.init();
                break;
            case 3:
                this.productManagement.displayProduct();
                this.init();
                break;
            case 4:
                this.productManagement.editProductSize();
                this.init();
                break;
            case 5:
                this.productManagement.editProductAmount();
                this.init();
                break;
            case 6:
                this.productManagement.editProductPrice();
                this.init();
                break;
            case 7:
                this.productManagement.editProductName();
                this.init();
                break;
            case 8:
                this.productManagement.editBrandName();
                this.init();
                break;
            case 9:
                this.productManagement.deleteProductById();
                this.init();
                break;
            case 10:
                this.productManagement.searchByBrand();
                this.init();
                break;
            case 11:
                this.productManagement.searchByName();
                this.init();
                break;
            case 12:
                this.productManagement.addProduct();
                this.init();
                break;
            case 13:
                console.log("-----------Exit Menu Admin Success------------");
                this.menuAccount = new MenuAccount();
                return;
        }
    }
}
// let menu = new MenuAdmin();
// menu.init();