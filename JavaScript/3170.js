var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let galhos = +lines.shift()
let bolinhas = +lines.shift()
