var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [n,x,y] = pegarValores(lines.shift())
// n = quantidade de imóveis.
// em cada N imóveis existe o X (Num Moradores) e Y (Quantidade de consumo do imóvel)

for(let i = 0; i >= n.lenght; i++){
    
}
