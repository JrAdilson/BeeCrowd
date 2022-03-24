var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [a,b,c] = pegarValores(lines.shift())
let calc;
if(a<(b+c) && b<(a+c) && c<(a+b)){
    calc = a+b+c
    console.log(`Perimetro = ${calc.toFixed(1)}`)
}else{
    calc = ((a+b)*c)/2
    console.log(`Area = ${calc.toFixed(1)}`)
}