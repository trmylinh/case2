
import ProductManagement from "../controller/ProductManagement";
import CartManagement from "../controller/CartManagement";
import MenuAccount from "./MenuAccount";

const readlineSync = require("readline-sync");

export default class MenuUser {
    private productManagement : ProductManagement = new ProductManagement();
    private cartManagement : CartManagement = new CartManagement();
    private menuAccount : MenuAccount;
    constructor() {
        this.init();

    }

    private init() {
        console.log(`
        --------------- Menu User ------------------
        1. Show lists of products
        2. Search product-brand
        3. Search product-name
        4. Shopping
        5. Show cart
        6. Change quantity product in your cart
        7. Remove product from cart
        8. Pay your cart
        9. Exit
        ---------------------------------------
        `);

        let choice: number = 0;
        let regex: RegExp = /^[1-9]$/;
        // let readlineSync = require('readline-sync');

        while (choice < 1 || choice > 9) {
            let choose = readlineSync.question("Choose your option:");
            if (regex.test(choose)) {
                choice = +(choose);
                // console.log("Right");
            } else {
                choice = -1;
                console.log("Please choose between 1 and 9!!");
            }
        }

        switch (choice) {
            case 1:
                this.productManagement.displayProduct();
                this.init();
                break;
            case 2:
                this.productManagement.searchByBrand();
                this.init();
                break;
            case 3:
                this.productManagement.searchByName();
                this.init();
                break;
            case 4:
                this.cartManagement.addCart();
                this.init();
                break;
            case 5:
                this.cartManagement.displayCart();
                this.init();
                break;
            case 6:
                this.cartManagement.changeQuantity();
                this.init();
                break;
            case 7:
                this.cartManagement.deleteProductOfCart();
                this.init();
                break;
            case 8:
                this.cartManagement.pay();
                this.init();
                break;
            case 9:
                console.log("-----------Exit Menu User Success------------");
                this.menuAccount = new MenuAccount();
                return;
        }

    }
}
// let menu = new MenuUser();