var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
// const pegarValores = (line) => line.split(" ").map(a => +a);
// const [a,b,c] = pegarValores(lines.shift())
let a = +lines.shift()
let b = +lines.shift()
console.log(`X = ${a + b}`)
//var resultado = a;
//var mensagem = `x = ${resultado}`;
//console.log(resultado)