var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let A = +lines.shift()
let B = +lines.shift()
let MEDIA = ((A*3.5)+(B*7.5))/11;
console.log(`MEDIA = ${MEDIA.toFixed(5)}`)