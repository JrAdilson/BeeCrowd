var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let word = lines.shift()
if(word.length >= 10 && word.length <= 20){
    console.log('palavrao')
}else if(word.length < 10){
    console.log('palavrinha')
}