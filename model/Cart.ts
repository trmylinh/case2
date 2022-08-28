import Product from "./Product";
import Account from "./Account";

export default class Cart {
    private static _ID: number = 1;
    private _id: number;
    private _quantity: number;
    private _product: Product;
    private _totalPrice: number;
    private _account: Account;

    constructor(quantity: number, product: Product, totalPrice: number) {
        // super();
        this._id = Cart._ID++;
        this._quantity = quantity;
        this._product = product;
        this._totalPrice = totalPrice;
    }



    static get ID(): number {
        return this._ID;
    }

    static set ID(value: number) {
        this._ID = value;
    }

     getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getQuantity(): number {
        return this._quantity;
    }

    setQuantity(value: number) {
        this._quantity = value;
    }

    getProduct(): Product {
        return this._product;
    }

    setProduct(value: Product) {
        this._product = value;
    }

    getTotalPrice(): number {
        return this._totalPrice;
    }

    setTotalPrice(value: number) {
        this._totalPrice = value;
    }

    getAccount(): Account {
        return this._account;
    }

    setAccount(value: Account) {
        this._account = value;
    }

    public toString() : string{
        return `Id-cart:${this._id}, Quantity:${this._quantity},${this._account},${this._product},${this._totalPrice}`;
    }

}



