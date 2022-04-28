var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let times = +lines.shift()
for(let i=1;i<=times;i++){
    console.log("Ho")
}
console.log("!")