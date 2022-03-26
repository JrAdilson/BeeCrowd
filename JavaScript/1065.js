var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
//const pegarValores = (line) => line.split(" ").map(a => +a);
let count = 0;
for(let i=0;i<5;i++){
    if(+lines.shift() %2 === 0){
        count++
    }
}
/* lines.map(i => { 
    if(i%2 === 0){
        count++
    }
}) */
console.log(`${count} valores pares`)