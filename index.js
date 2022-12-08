#!/user/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
var label = ` _____________________
|  _________________  |
| |      JAVERIA    | |
| |______HASSAN ____| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`;
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow("Let's Start Calculation...");
    await sleep();
    title.stop();
    let labelAnim = chalkAnimation.rainbow(label);
    await sleep();
    labelAnim.stop();
}
await welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operation would you like to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2"
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    else if (answers.operator == "Subtraction") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator == "Multiplication") {
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    else if (answers.operator == "Division") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
}
async function restartCalc() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to continue? Press y or n"
            },
        ]);
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'Yes' || again.restart == 'YES');
}
restartCalc();
