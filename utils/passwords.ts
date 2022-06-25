const ALPHANUMERIC: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SPECIAL: string = "!@#/\\{}[]<>*&%$+-=,.:";

class Password {    
    length: number;
    allcharacters: string;

    constructor({length = 8, validcharacters = ALPHANUMERIC+SPECIAL}){
        this.length = length;
        this.allcharacters = validcharacters
    }

    generate(){
        let password = '';                
        for(let i=0;i<=this.length;i++){
            password += this.allcharacters.charAt(Math.floor(Math.random() * this.allcharacters.length))
        }
        return password
    }

}

export default Password