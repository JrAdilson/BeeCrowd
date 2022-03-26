var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let n = +lines.shift()
for(i=0;i<=n;i++){
    if(i % 2 != 0){
        console.log(i);
    }
}