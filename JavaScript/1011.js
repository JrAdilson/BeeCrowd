var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let raio = +lines.shift()
let pi = 3.14159
let total = ((4/3.0) * pi * (raio*raio*raio))
console.log(`VOLUME = ${total.toFixed(3)}`)