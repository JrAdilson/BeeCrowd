var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
//const pegarValores = (line) => line.split(" ").map(a => +a);
let count = 0;
for(let i=0;i<6;i++){
    if(+lines.shift() > 0){
        count++
    }
}
console.log(`${count} valores positivos`)