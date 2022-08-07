var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => Number(a));
const [hInicial, minInicial, hFinal, minFinal] = pegarValores(lines.shift());

const useODiaSeguinte = hInicial > hFinal || minInicial > minFinal;

const base = new Date();

const dataInicial = new Date(
  base.getFullYear(),
  base.getMonth(),
  base.getDate(),
  hInicial,
  minInicial
);

const dataFinal = new Date(
  base.getFullYear(),
  base.getMonth(),
  useODiaSeguinte ? base.getDate() + 1 : base.getDate(),
  hFinal,
  minFinal
);

const difMili = dataFinal - dataInicial;
let difHoras = Math.floor((difMili % 86400000) / 3600000);
let difMinutos = Math.round(((difMili % 86400000) % 3600000) / 60000);

if (!difHoras && !difMinutos) difHoras = 24;

console.log(`O JOGO DUROU ${difHoras} HORA(S) E ${difMinutos} MINUTO(S)`);