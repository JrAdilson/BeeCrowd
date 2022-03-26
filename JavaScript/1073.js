var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let n = +lines.shift()
let result = 0
for(i=1;i<=n;i++){
    if(i % 2 == 0){
        result = Math.pow(i,2)
        console.log(`${i}^2 = ${result}`)
    }
}