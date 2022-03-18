var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
const [cod,num,valor] = pegarValores(lines.shift())
const [cod1,num1,valor1] = pegarValores(lines.shift())
let total = (num*valor) + (num1*valor1)
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)