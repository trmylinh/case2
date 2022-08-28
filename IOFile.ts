import * as fs from 'fs';
import Account from "./model/Account";
import Product from "./model/Product";
import Cart from "./model/Cart";

export default class IOFile {
    public readFile(path: string) {
        let data = fs.readFileSync(path);
        if(!data){

        }
        return data.toString().split('\r\n');
    }

    public writeFile(path: string, data: Array<Account> | Array<Product> | Array<Cart>) {
        let str = "";
        // console.log(data);

        data.forEach((e, index) => {
            if (index == data.length - 1) {
                str += e.toString()
            } else {
                str += e.toString() + "\r\n"
            }
        })

        fs.writeFileSync(path, str);

    }
}
