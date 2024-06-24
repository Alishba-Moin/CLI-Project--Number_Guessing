#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright(`\n<<<========================================>>>`));
console.log(chalk.bold.redBright(`<<<========>>>  ${chalk.redBright.bold('NUMBER GUESSING GAME')}  <<<========>>>`));
console.log(chalk.bold.yellowBright(`<<<========================================>>>\n`));


const random_Number = Math.floor(Math.random() * 6 + 1)

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.bold.italic("Please guess a number between 1-6:")
},
]);
if(answer.userGuessedNumber === random_Number){
    console.log(chalk.bold.greenBright("Congratulation! You Guessed Correct Number."));
}

else{
    console.log(chalk.bold.redBright("Oppsss! You Guessed Wrong Number"));
}
