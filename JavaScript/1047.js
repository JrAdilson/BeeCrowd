var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [horaInicial,minutoInicial,horaFinal,minutoFinal] = pegarValores(lines.shift())
// a = horas, b = minutos inicias
// c = horas, d = minutos finais
let fim = horaFinal - horaInicial;
let min = minutoFinal - minutoInicial
if (fim < 0){
    fim = 24 + (horaFinal-horaInicial)
}
if (min < 0){
    min = 60 + (minutoFinal-minutoInicial)
    fim--
}
if(horaInicial==horaFinal && minutoInicial==minutoFinal){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')
}else{
    console.log(`O JOGO DUROU ${fim} HORA(S) E ${min} MINUTO(S)`)
}