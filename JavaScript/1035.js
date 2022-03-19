/*
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, 
forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
*/
var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [A,B,C,D] = pegarValores(lines.shift())

if(B>C && D>A && (C+D)>(A+B) && C > 0 && D > 0 && A % 2 === 0){
    console.log("Valores aceitos")
}else{
    console.log("Valores nao aceitos")
}