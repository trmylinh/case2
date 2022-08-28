import User from "./User";
export default  class Account{
    private name : string;
    private password : string;
    private user : User;

    constructor(name: string, password: string, user : User) {
        this.name = name;
        this.password = password;
        this.user = user;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(value: string) {
        this.password = value;
    }


    getUser(): User {
        return this.user;
    }

    setUser(value: User) {
        this.user = value;
    }

    public toString() : string {
        return `${this.name},${this.password},${this.user}`;

    }


}

// let account = new Account("Ngoc","123");
// console.log(account.toString())
// account.didplay();
