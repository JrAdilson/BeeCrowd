var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');


let nome = lines.shift()
let salarioFixo = +lines.shift()
let totalVendas = +lines.shift()
let salary = (salarioFixo + (totalVendas * 0.15))
console.log(`NUMBER = ${number}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)