import Account from "./Account";
export default class User{
    private _userName : string;
    private _userAge: number;
    private _userAddress : string;
    private _userAccount : Account;


    constructor(userName: string, userAge: number, userAddress: string, userAccount: Account) {
        this._userName = userName;
        this._userAge = userAge;
        this._userAddress = userAddress;
        this._userAccount = userAccount;
    }


    getuserName(): string {
        return this._userName;
    }

    setuserName(value: string) {
        this._userName = value;
    }

    getuserAge(): number {
        return this._userAge;
    }

    setuserAge(value: number) {
        this._userAge = value;
    }

    getuserAddress(): string {
        return this._userAddress;
    }

    setuserAddress(value: string) {
        this._userAddress = value;
    }

    getuserAccount(): Account {
        return this._userAccount;
    }

    setuserAccount(value: Account) {
        this._userAccount = value;
    }

    public toString = () : string => {
        return `userName: ${this._userName}, userAge: ${this._userAge}, userAddress: ${this._userAddress}, userAccount: ${this._userAccount}`;
    }

}
// let account1 = new Account("linh","123");
// let user = new User("linh", 20,"Ha Noi", account1);
// console.log(user.getuserAddress());
// console.log(user.toString());