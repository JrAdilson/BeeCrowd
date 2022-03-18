var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
const [cod,num] = pegarValores(lines.shift())
const [cod1,num1] = pegarValores(lines.shift())
let a = Math.pow(cod-num,2)
let b = Math.pow(cod1-num1,2)
let c = a+b
let d = Math.sqrt(c)
//let distancia = Math.sqrt(Math.pow(cod - num, 2) + Math.pow(cod1 - num1, 2)).toFixed(4);
console.log(d)