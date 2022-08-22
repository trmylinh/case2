export default  class Account{
    private name : string;
    private password : string;


    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }

    getname(): string {
        return this.name;
    }

    setname(value: string) {
        this.name = value;
    }

    getpassword(): string {
        return this.password;
    }

    setpassword(value: string) {
        this.password = value;
    }

    public toString = () : string => {
        return `${this.name},${this.password}`;

    }


}
// let account = new Account("Ngoc","123");
// console.log(account.toString())
