
export default class User{
    private _userName : string;
    private _userAge: number;
    private _userAddress : string;

    constructor(userName: string, userAge: number, userAddress: string) {
        this._userName = userName;
        this._userAge = userAge;
        this._userAddress = userAddress;

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


    public toString = () : string => {
        return `${this._userName},${this._userAge},${this._userAddress}`;
    }

}
// let account1 = new Account("linh","123");
// let user = new User("linh", 20,"Ha Noi", account1);
// console.log(user.getuserAddress());
// console.log(user.toString());