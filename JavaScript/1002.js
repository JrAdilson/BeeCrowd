var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

    let n = 3.14159
    let raio = +lines.shift()
    let area = (raio*raio)*n;
    console.log(`A=${area.toFixed(4)}`)