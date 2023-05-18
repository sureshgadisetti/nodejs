const readline = require('readline');
const fs = require('fs');
/*****  Lecture 4 : Code Example *****
 Reading Input & Writing Output 
 ****************************************
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout

    }
)
rl.question("Please Enter Your Name : ",(name) =>{
    console.log("You Entered " + name);
    rl.close();
})

rl.on('close',() =>{
    console.log("interface Closed");
    process.exit(0);
}) */

/*****  Lecture 5 : Code Example *****
READING & WRITING TO A FILE
 ****************************************/
let textIn = fs.readFileSync('./Files/input.txt','utf-8');
console.log(textIn);

let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`
fs.writeFileSync('./Files/output.txt',content);