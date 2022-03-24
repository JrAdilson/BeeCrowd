var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [a,b,c,d] = pegarValores(lines.shift())
let media = ((a*2)+(b*3)+(c*4)+(d*1))/10;
let f
if(media >= 7){
    console.log(`Media: ${media.toFixed(1)}`)
    console.log(`Aluno aprovado.`)
}else if(media < 5){
    console.log(`Media: ${media.toFixed(1)}`)
    console.log(`Aluno reprovado.`)
}else{
    console.log(`Media: ${media.toFixed(1)}`)
    console.log(`Aluno em exame.`)
    const pegarValores1 = (line) => line.split(" ").map(a => +a);
    let [e] = pegarValores1(lines.shift())
    console.log(`Nota do exame: ${e.toFixed(1)}`)
    if(e >= 5){
        console.log(`Aluno aprovado.`)
        f = (e+media)/2
        console.log(`Media final: ${f.toFixed(1)}`)
    }else{
        console.log(`Aluno reprovado.`)
        f = (e+media)/2
        console.log(`Media final: ${f.toFixed(1)}`)
    }
}