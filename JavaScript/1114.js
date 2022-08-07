var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

var senha = Number(lines.shift());
while (senha !== 2002) {
    console.log('Senha Invalida');
    senha = Number(lines.shift());
}
console.log('Acesso Permitido');