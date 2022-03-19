var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [cod,qtd] = pegarValores(lines.shift())

if(cod == 1){
    let a = 4*qtd;
    console.log(`Total: R$ ${a.toFixed(2)}`)
}else if(cod == 2){
    let b = 4.5*qtd;
    console.log(`Total: R$ ${b.toFixed(2)}`)
}else if(cod == 3){
    let c = 5*qtd
    console.log(`Total: R$ ${c.toFixed(2)}`)
}else if(cod == 4){
    let d = 2*qtd
    console.log(`Total: R$ ${d.toFixed(2)}`)
}else if(cod == 5){
    let e = 1.5*qtd
    console.log(`Total: R$ ${e.toFixed(2)}`)
}