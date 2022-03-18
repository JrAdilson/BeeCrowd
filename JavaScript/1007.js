var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let A = +lines.shift()
let B = +lines.shift()
let C = +lines.shift()
let D = +lines.shift()
let DIFERENCA = ((A*B)-(C*D))
console.log(`DIFERENCA = ${DIFERENCA}`)
