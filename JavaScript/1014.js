var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let X = +lines.shift()
let Y = +lines.shift()
let kms = X/Y;
console.log(`${kms.toFixed(3)} km/l`)