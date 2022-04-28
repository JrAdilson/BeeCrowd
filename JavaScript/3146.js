var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let n = +lines.shift()
let conta = 0;
conta = ((3.14+3.14)*n)
console.log(conta.toFixed(2))