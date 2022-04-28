var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [a,b] = pegarValores(lines.shift())
let result = 0;
if(a>b){
    result = 24 - a + b;
    console.log(`O JOGO DUROU ${result} HORA(S)`)
}else if(a==b){
    console.log(`O JOGO DUROU 24 HORA(S)`)
}else{
    result = b - a
    console.log(`O JOGO DUROU ${result} HORA(S)`)
}