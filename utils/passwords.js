const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const SPECIAL = "!@#/\{}[]<>*&%$+-=,.:"

class Password {    

    constructor({length = 8, validcharacters = ALPHANUMERIC+SPECIAL}){
        this.length = length
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

module.exports = {Password}