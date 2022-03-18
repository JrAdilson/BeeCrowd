var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');


let number = +lines.shift()
let horas = +lines.shift()
let horast = +lines.shift()
let salary = horas*horast;
console.log(`NUMBER = ${number}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)