var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
const pegarValores = (line) => line.split(" ").map(a => +a);
let [A,B,C] = pegarValores(lines.shift())

let result  = Math.sqrt((B*B)-(4*A*C))
if(A != 0 && result > 0 ){
    let r1 = ((-B+result)/(2*A))
    let r2 = ((-B-result)/(2*A))
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
}else{
    console.log("Impossivel calcular")
}