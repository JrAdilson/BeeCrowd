var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let inteiro = +lines.shift()+0.001 // Verificar com o ricardo o motivo.
let nota100,nota50,nota20,nota10,nota5,nota2,nota1;
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
moeda1 = parseInt(inteiro/1)
inteiro = inteiro % 1;
moeda2 = parseInt(inteiro/0.5)
inteiro = inteiro % 0.5;
moeda3 = parseInt(inteiro/0.25)
inteiro = inteiro % 0.25;
moeda4 = parseInt(inteiro/0.1)
inteiro = inteiro % 0.1;
moeda5 = parseInt(inteiro/0.05)
inteiro = inteiro % 0.05;
moeda6 = parseInt(inteiro/0.01)
inteiro = inteiro % 0.01;
console.log("NOTAS:")
console.log(nota100 + " nota (s) de R$ 100.00");
console.log(nota50 + " nota (s) de R$ 50.00");
console.log(nota20 + " nota (s) de R$ 20.00");
console.log(nota10 + " nota (s) de R$ 10.00");
console.log(nota5 + " nota (s) de R$ 5.00");
console.log(nota2 + " nota (s) de R$ 2.00");
console.log("MOEDAS:")
console.log(moeda1 + " moeda (s) de R$ 1.00");
console.log(moeda2 + " moeda (s) de R$ 0.50");
console.log(moeda3 + " moeda (s) de R$ 0.25");
console.log(moeda4 + " moeda (s) de R$ 0.10");
console.log(moeda5 + " moeda (s) de R$ 0.05");
console.log(moeda6 + " moeda (s) de R$ 0.01");
