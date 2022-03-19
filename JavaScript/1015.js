var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [x1, x2] = pegarValores(lines.shift())
const pegarValores2 = (line) => line.split(" ").map(a => +a);
let [y1, y2] = pegarValores2(lines.shift())

/* let a = Math.pow(cod-num,2)
let b = Math.pow(cod1-num1,2)
let c = a+b
let d = Math.sqrt(c) */
let distancia = Math.sqrt(Math.pow(x1-y1, 2) + Math.pow(x2-y2, 2)).toFixed(4);
console.log(distancia)