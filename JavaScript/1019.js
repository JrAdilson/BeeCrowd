var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let segundos = +lines.shift()
let minutos;
let horas;
horas = parseInt(segundos/3600)
segundos = segundos % 3600;
minutos = parseInt(segundos/60);
segundos = segundos % 60;
segundos = segundos
console.log(horas + ':' + minutos + ':' + segundos);