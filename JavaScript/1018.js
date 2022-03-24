var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let inteiro = +lines.shift()
let nota100,nota50,nota20,nota10,nota5,nota2,nota1;
console.log(inteiro);
nota100 = parseInt(inteiro/100)
inteiro = inteiro % 100;
nota50 = parseInt(inteiro/50)
inteiro = inteiro % 50;
nota20 = parseInt(inteiro/20)
inteiro = inteiro % 20;
nota10 = parseInt(inteiro/10)
inteiro = inteiro % 10;
nota5 = parseInt(inteiro/5)
inteiro = inteiro % 5;
nota2 = parseInt(inteiro/2)
inteiro = inteiro % 2;
nota1 = parseInt(inteiro/1)
inteiro = inteiro % 1;

console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");
