var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let A = +lines.shift()
let B = +lines.shift()
let C = +lines.shift()
let MEDIA = ((A*2)+(B*3)+(C*5))/10;
console.log(`MEDIA = ${MEDIA.toFixed(1)}`)