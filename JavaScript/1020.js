var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let idade = +lines.shift()
let anos, meses;
anos = parseInt(idade / 365);
idade = idade % 365;
meses = parseInt(idade/30)
idade = idade % 30;
idade = idade;
console.log(anos + ' ano(s)\n' + meses + ' mes(es)\n' + idade + ' dia(s)')
