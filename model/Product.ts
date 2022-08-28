import Brand from "./Brand";

export default class Product{
    private id : number;
    private name : string;
    private price : number;
    private amount : number;
    private size : string;
    private brand : Brand;

    constructor(id: number, name: string, brand: Brand,size: string, price : number, amount: number) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.price = price;
        this.amount = amount;
    }

    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getBrand(): Brand {
        return this.brand;
    }

    setBrand(value: Brand) {
        this.brand = value;
    }
    getSize(): string {
        return this.size;
    }

    setSize(value: string) {
        this.size = value;
    }
    getPrice(): number {
        return this.price;
    }

    setPrice(value: number) {
        this.price = value;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(value: number) {
        this.amount = value;
    }

    public toString() : string{
        return `${this.id},${this.name},${this.brand},${this.size},${this.price},${this.amount}`;
    }
}