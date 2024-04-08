#! /usr/bin/env node

import inquirer from "inquirer";

const input = await inquirer.prompt([
    { message: "enter user name", type: "string", name: "userName" },
    { message:"enter password",type:"number",name:"password"}
]);
let userName = "anas";
let password = 1234;

if(input.userName==="anas" && input.password===1234){
    console.log("you login succesfully")
}else{
    console.log("sorry you cant login")
}
