var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a=>+a)
const[a,b,c] = pegarValores(lines.shift())

let pi = 3.14159
let areaT = (a*c)/2;
let areaC = pi*(c*c)
let areaTr = ((a+b)*c)/2
let areaQr = b*b
let areaR = a*b
console.log(`TRIANGULO: ${areaT.toFixed(3)}`) 
console.log(`CIRCULO: ${areaC.toFixed(3)}`) 
console.log(`TRAPEZIO: ${areaTr.toFixed(3)}`) 
console.log(`QUADRADO: ${areaQr.toFixed(3)}`) 
console.log(`RETANGULO: ${areaR.toFixed(3)}`)