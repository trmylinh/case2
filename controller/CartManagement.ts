import Cart from "../model/Cart";
import Product from "../model/Product";
const readlineSync = require("readline-sync");
import ProductManagement from "./ProductManagement";
import IOFile from "../IOFile";
import Brand from "../model/Brand";

export default class CartManagement{
    public cartList : Array<Cart> = new Array<Cart>();
    private productManagament : ProductManagement = new ProductManagement() ;
    private fileAccount = new IOFile();
    private PATH = "./data/Cart.txt";
    constructor() {
        // this.getData();
    }

    createCart() : Cart{
        let id : number = readlineSync.question("Enter id of product you wan to buy:");
       let product :  Product = this.getProductByID(id);
        while(this.checkProductInCart(id)){
            console.log("Id of product already exit");
            id = readlineSync.question("Enter id of product you wan to buy:");
        }
       let newAmount : number = readlineSync.question("Enter amount you want to buy:");
       for(let i = 0; i < this.productManagament.productList.length; i++) {
           if(id == this.productManagament.productList[i].getId()) {
               while (newAmount < 0) {
                   console.log("Please enter amount > 0");
                   newAmount = readlineSync.question("Enter amount you want to buy:");
               }
               while (newAmount > this.productManagament.productList[i].getAmount()) {
                   console.log("Warning!");
                   newAmount = readlineSync.question("Enter amount you want to buy:");
               }
           }
       }
       this.updateAmountInCart(id,newAmount);

        let totalPrice : number = newAmount * product.getPrice();
        return new Cart(newAmount,product, totalPrice);
    }
    updateAmountInCart(id:number,newAmount:number) :void{
        this.cartList.forEach((e)=>{
            if(e.getProduct().getId() == id){
                e.setQuantity(newAmount);
            }
        })
    }
    changeQuantity() : void{
        let id_p : number = readlineSync.question("Enter id-product you want to change quantity:");
        let newQuantity : number = readlineSync.question("Change quantity you want:");
        this.cartList.forEach((e)=>{
            if(e.getProduct().getId() == id_p){
                e.setQuantity(newQuantity);
            }
        })
    }
    checkProductInCart(id: number) : boolean{
        for(let i = 0; i < this.cartList.length; i++){
            if(id == this.cartList[i].getProduct().getId()){
                return true;
            }
        }
        return false;
    }
    getProductByID(id:number) : Product{
        for(let i = 0; i < this.productManagament.productList.length;i++){
            if(id == this.productManagament.productList[i].getId()){
                return this.productManagament.productList[i];
            }
        }
        return null;
    }

    public  addCart() : void{
        let cart : Cart = this.createCart();
        this.cartList.push(cart);
        // console.log(this.cartList);
        // this.fileAccount.writeFile(this.PATH,this.cartList);
    }

    public displayCart() : void{
        console.log(this.cartList);
    }

    public pay() : void{
        let sum : number = 0;
        this.cartList.forEach((e)=>{
            sum += e.getTotalPrice();
        })
        if(this.cartList.length == 0){
            console.log(`-----------------
        No product in cart. Please pick product which you like ^^
        ------------------------------`);
        }
        else {
            console.log(`-----------------
        Payment success
        Total: ${sum} VND
        ------------------------------`);
        }
       this.updateAmountProduct();
        delete  this.cartList;
    }
    public updateAmountProduct() : void{
            for(let i = 0; i < this.cartList.length ; i++){
                for(let j = 0; j < this.productManagament.productList.length;j++) {
                    if (this.cartList[i].getProduct().getId() == this.productManagament.productList[j].getId()) {
                        this.productManagament.productList[j].setAmount(this.productManagament.productList[j].getAmount() - this.cartList[i].getQuantity());
                    // console.log("p"+this.productManagament.productList[j].getAmount());
                    // console.log("c"+this.cartList[i].getQuantity());
                        break;
                    }
                }
            }

            this.productManagament.fileProduct.writeFile(this.productManagament.PATH,this.productManagament.productList);
    }

    public deleteProductOfCart() : void{
        if(this.cartList.length != 0) {
            let id_p : number = readlineSync.question("Enter id of product you need to delete:");
            for (let i = 0; i < this.cartList.length; i++) {
                if (id_p == this.cartList[i].getProduct().getId()) {
                    this.cartList.splice(i, 1);
                    console.log("-----------Delete Success!-------------");
                }
            }

        }
        else{
            console.log("Your cart is empty. So you can't remove anything.");
        }

        // this.fileAccount.writeFile(this.PATH,this.cartList);
    }

    private getData() {
        let  data = this.fileAccount.readFile(this.PATH);
        data.forEach(e=>{
            let id = +e.split(',')[0];
            let quantity = +(e.split(',')[1]);
            let totalPrice = +e.split(',')[2];
            let name = (e.split(',')[3]);
            let namebrand = e.split(',')[4];
            let size = e.split(',')[5];
            let price = +e.split(',')[6];
            let amount = +e.split(',')[7];
            let brand = new Brand(namebrand);
            let product = new Product(id,name,brand,size,price,amount);
            this.cartList.push(new Cart(quantity,product,totalPrice));
        })
    }
}
// let cart = new CartManagement();
// cart.addCart();
// cart.displayCart();
// // cart.addCart();
// // cart.displayCart();
// cart.pay();
// cart.getProductByID();