// Cross-platform password generator
//chalk - pretty print to console
//commander - to accept command arguments

let log = console.log
import chalk from "chalk"
import {program} from "commander"
import Password from "./utils/passwords"

// commander config
program
    .name('passwordgen')
    .description('Password generator made in NodeJS')
    .version('1.0.0');
program
    .command('generate')
    .description('generate a new password')
    // .argument('<length>', 'password length', '8')
    .option('-l,--length <integer>', 'length for the password')
    .action((options) => {        
        let length =  options.length;
        let validcharacters = options.validcharacters
        let password = new Password({length, validcharacters}).generate();
        log("Your password with "+ password.length +" characters is:" + "\n" + chalk.bgMagenta(password));
    });

program.parse()
