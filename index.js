#!
import inquirer from "inquirer";
const random_Number = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:"
    },
]);
if (answer.userGuessedNumber === random_Number) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
