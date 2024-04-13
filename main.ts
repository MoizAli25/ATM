#! /usr/bin/env node

import inquirer from "inquirer";

// set balance and pin
let myBalance = 10000; //dollar
let myPin = 1234;

// enter pin code
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code",
    type: "number",
  },
]);

// if pin is correct then give options of withdraw, check balance and fast cash
if (pinAnswer.pin === myPin) {
  console.log("Correct Pin code !");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);

  // Incase of withdrawal
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
      },
    ]);

    myBalance -= amountAns.amount;

    //If withdrawal amount is more then the balance
    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else {
      console.log(`Your remaining balance is : ${myBalance}`);
    }

    // Incase of checking balance
  } else if (operationAns.operation === "Check Balance") {
    console.log(`Your balance is: ${myBalance}`);

    // Incase of fast cash
  } else if (operationAns.operation === "Fast Cash") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Select your Amount",
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "15000", "20000"],
      },
    ]);

    myBalance -= amountAns.amount;

    //If withdrawal amount is more then the balance
    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else {
      console.log(`Your remaining balance is : ${myBalance}`);
    }
  }
}
// If the pin is incorrect
else {
  console.log("Incorrect pin number");
}
