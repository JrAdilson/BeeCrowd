var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');


let tempo = +lines.shift()
let conta = tempo*2;
console.log(`${conta} minutos`)