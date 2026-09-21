//while loop

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n: "));
// let i = 0;
// while(i < n) {
//     console.log(i);
//     i++;
// }

//do while loop. here first block run then condition check
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter n: "));
let i = 0;
do {
    console.log(i);
    i++;
}while(i < n)