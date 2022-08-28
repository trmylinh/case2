import Cart from "../model/Cart";
import Product from "../model/Product";
const readlineSync = require("readline-sync");
import ProductManagement from "./ProductManagement";

export default class CartManagement{
    public cartList : Array<Cart> = new Array<Cart>();
    private productManagament : ProductManagement = new ProductManagement() ;
    constructor() {

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
       // let size : String = readlineSync.question("Enter size you want to buy:");
       this.updateAmountInCart(id,newAmount);
        // this.cartList.forEach((e)=>{
        //     if(e.getProduct().getId() == id){
        //         e.setCount(newAmount);
        //     }
        // })
        let totalPrice : number = newAmount * product.getPrice();
       // console.log(totalPrice);
        return new Cart(newAmount,product, totalPrice);
    }
    updateAmountInCart(id:number,newAmount:number) :void{
        this.cartList.forEach((e)=>{
            if(e.getProduct().getId() == id){
                e.setQuantity(newAmount);
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
        // this.productMangament = new ProductManagement();
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
    }

    public displayCart() : void{
        console.log(this.cartList);
    }

    public pay() : void{
        let sum : number = 0;
        this.cartList.forEach((e)=>{
            sum += e.getTotalPrice();
        })
        console.log(`-----------------
        Payment success
        Total: ${sum} VND
        ------------------------------`);
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
        let id_p : number = readlineSync.question("Enter id of product you need to delete: ");
        for(let i = 0; i < this.cartList.length;i++){
            if(id_p == this.cartList[i].getProduct().getId()){
                this.cartList.splice(i,id_p);
            }
        }
    }
}
// let cart = new CartManagement();
// cart.addCart();
// cart.displayCart();
// // cart.addCart();
// // cart.displayCart();
// cart.pay();
// cart.getProductByID();