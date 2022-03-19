var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let tempo = +lines.shift()
let velMedia = +lines.shift()
let calculo = (tempo*velMedia)/12
console.log(calculo.toFixed(3))