#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter your first number >>",
    type: "input",
    name: "firstNumber",
  },
  {
    message: "Enter your second number >>",
    type: "input",
    name: "secondNumber",
  },
  {
    message: "select one of the operator to perfom action,",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//conditional oparators
if(answer.operator === "Addition"){
    console.log(`Your ${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operator === "Subtraction"){
    console.log(`Your ${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operator === "Multiplication"){
    console.log(`Your ${answer.firstNumber} x ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operator){
    console.log(`Your ${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`);
};