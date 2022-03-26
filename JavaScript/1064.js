var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let n = +lines.shift()
let par = 0;
for(let i=0;i<=6;i++){
    if(n > 0){
        par += 1
        i++
    }
}
console.log(`${i} valores positivos`)
console.log(`${par/n}`)