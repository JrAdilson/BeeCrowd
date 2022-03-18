var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let A = +lines.shift()
let B = +lines.shift()
let PROD = A*B;
console.log(`PROD = ${PROD}`)