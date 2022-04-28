var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [a,b,c] = pegarValores(lines.shift())

for(let i=0; i<3;i++){
    
}
