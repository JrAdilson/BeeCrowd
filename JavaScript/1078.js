var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let tabuada = +lines.shift()
const a = [1,2,3,4,5,6,7,8,9,10];
let result = 0
for(i=1;i<=10;i++){
    result = tabuada*i
    console.log(`${i} x ${tabuada} = ${result}`)
}