var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let n = lines.shift()
let resposta = 'Nao se refuta ciencia com opiniao';
if(n != resposta){
    console.log('Nao se refuta ciencia com opiniao')
}