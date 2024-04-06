#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
console.log("\n \t Welcome to my To Do List\n");
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: " Enter your Task: ",
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in To Do List Successfully..!`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more Task?",
            default: "false",
        }
    ]);
    condition = addMoreTask.addmore;
}
console.log("Your updated ToDo-List: ", todoList);
