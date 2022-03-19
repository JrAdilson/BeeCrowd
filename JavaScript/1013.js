var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a=>+a)
const[a,b,c] = pegarValores(lines.shift())

let maiorAB = (a+b+Math.abs(a-b))/2
let maiorFim = (maiorAB+c+Math.abs(maiorAB-c))/2
console.log(`${maiorFim} eh o maior`)