import Product from "../model/Product";
import CartManagement from "./CartManagement";
import IOFile from "../IOFile";
import Brand from "../model/Brand";
const readlineSync = require("readline-sync");
export default class ProductManagement{
    // private cartManagament : CartManagement = new CartManagement();
    public productList : Array<Product> = new Array<Product>();
    public fileProduct = new IOFile();
    public PATH = "./data/Product.txt";
    constructor() {
        this.getData();
    }

    getData():void{
        let  data = this.fileProduct.readFile(this.PATH);
        data.forEach(e=>{
            let id = +(e.split(',')[0]);
            let name = e.split(',')[1];
            let brandproduct = (e.split(',')[2]);
            let size = (e.split(',')[3]);
            let price = +(e.split(',')[4]);
            let amount = +(e.split(',')[5]);
            let brand = new Brand(brandproduct);
            this.productList.push(new Product(id,name, brand,size, price,amount));
        })
    }

    createProduct() : Product{
        let id : number = readlineSync.question("Enter product id:")
        let nameProduct : string = readlineSync.question("Enter name product:");
        let price : number = readlineSync.question("Enter price:");
        let amount : number = readlineSync.question("Enter amount:");
        let size : string = readlineSync.question("Enter size:");
        let brand : Brand = this.createBrand();
        return new Product(id,nameProduct, brand,size, price,amount);
    }
     createBrand() : Brand{
        let brand : string = readlineSync.question("Enter brand:");
        return new Brand(brand);
     }
    addProduct() : void{
        let product :  Product = this.createProduct();
        this.productList.push(product);
        this.fileProduct.writeFile(this.PATH,this.productList);
    }

    deleteProductById() : void{
        let id : number = readlineSync.question("Enter id of the product you want to delete:");
        for(let i = 0; i < this.productList.length; i++){
            if(this.productList[i].getId() == id){
                delete this.productList[i];
            }
        }
        this.fileProduct.writeFile(this.PATH,this.productList);

    }

    searchByName() : void{
        let name : string = readlineSync.question("Enter name of the product you want to search:");
        for(let i = 0; i < this.productList.length; i++){
            if(this.productList[i].getName().toUpperCase().includes(name.toUpperCase())){
                console.log(`
                id: ${this.productList[i].getId()}
                name: ${this.productList[i].getName()}
                brand: ${this.productList[i].getBrand()}
                price: ${this.productList[i].getPrice()}
                amount: ${this.productList[i].getAmount()}
                `);
            }
        }
    }

    searchByBrand() : void{
        let brand : string = readlineSync.question("Enter brand you want to search:");
        for(let i = 0; i < this.productList.length; i++){
           if(this.productList[i].getBrand().getName().toUpperCase() == brand.toUpperCase()){
               console.log(`
                id: ${this.productList[i].getId()}
                name: ${this.productList[i].getName()}
                brand: ${this.productList[i].getBrand()}
                price: ${this.productList[i].getPrice()}
                amount: ${this.productList[i].getAmount()}
                `);
           }
        }
    }
    // updateAmount() : void{
    //     // this.cartManagament = new CartManagement();
    //     // for(let i = 0; i < this.cartManagament.cartList.length ; i++){
    //     //     for(let j = 0; j < this.productList.length;j++) {
    //     //         if (this.cartManagament.cartList[i].getId() == this.productList[i].getId()) {
    //     //             this.productList[i].setAmount(this.productList[i].getAmount() - this.cartManagament.cartList[i].getQuantity());
    //     //         }
    //     //     }
    //     // }
    //     //
    //     // this.fileProduct.writeFile(this.PATH,this.productList);
    //     console.log(this.cartManagament.cartList.length);
    // }

    editBrandName() : void{
        let id : number = readlineSync.question("Enter id of product you want to edit brand:");
        let editBrand : string = readlineSync.question("Enter new brand:");
        for(let i = 0; i < this.productList.length; i++){
           if(this.productList[i].getId() == id){
               this.productList[i].getBrand().setName(editBrand);
               this.fileProduct.writeFile(this.PATH,this.productList);
           }
        }
    }
    editProductName() : void{
        let id : number = readlineSync.question("Enter id of product you want to edit name:");
        let editName : string = readlineSync.question("Enter new name:");
        for(let i = 0; i < this.productList.length; i++){
           if(this.productList[i].getId() == id){
               this.productList[i].setName(editName);
               this.fileProduct.writeFile(this.PATH,this.productList);
           }
        }
    }
    editProductPrice() : void{
        let id : number = readlineSync.question("Enter id of product you want to edit price:");
        let editPrice : number = readlineSync.question("Enter new price:");
        for(let i = 0; i < this.productList.length; i++){
           if(this.productList[i].getId() == id){
               this.productList[i].setPrice(editPrice);
               this.fileProduct.writeFile(this.PATH,this.productList);
           }
        }
    }
    editProductAmount() : void{
        let id : number = readlineSync.question("Enter id of product you want to edit amount:");
        let editAmount : number = readlineSync.question("Enter new amount:");
        for(let i = 0; i < this.productList.length; i++){
           if(this.productList[i].getId() == id){
               this.productList[i].setAmount(editAmount);
               this.fileProduct.writeFile(this.PATH,this.productList);
           }
        }
    }
    editProductSize() : void{
        let id : number = readlineSync.question("Enter id of product you want to edit size:");
        let editSize : string = readlineSync.question("Enter new size:");
        for(let i = 0; i < this.productList.length; i++){
           if(this.productList[i].getId() == id){
               this.productList[i].setSize(editSize);
               this.fileProduct.writeFile(this.PATH,this.productList);
           }
        }
    }

    displayProduct() :void{
        let data = this.fileProduct.readFile(this.PATH);
        console.log("Lists of products:");
        data.forEach((e) =>{
            console.log(e);
        })
    }

}
// let product = new ProductManagement();
// product.addProduct();
// product.displayProduct();
// product.deleteProductById();
// product.searchByName();
// product.editBrandName();
// product.displayProduct();