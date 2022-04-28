var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let n = +lines.shift()
let count = 0;
while(count < 6){
    if(n % 2 != 0){
        console.log(n)
        count++
    }
    n++
}