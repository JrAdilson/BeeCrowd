var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

let countA = 0;
let countB = 0;
let par = 0
let impar = 0;
for(let j=0;j<5;j++){
    let a = +lines.shift()
    let ij = a % 2
    if(ij == 0){
        par++
        if(a > 0 && a != 0){
            countA++
        }else if(a < 0 && a != 0){
            countB++
        }
    }else{
        impar++
        if(a > 0 && a != 0){
            countA++
        }else if(a < 0 && a != 0){
            countB++
        }
    }
}
/*for(let i=0;i<5;i++){
    if(+lines.shift() >= 0){
        countA++
    }else if(+lines.shift() < 0){
        countB++
    }
}*/

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${countA} valor(es) positivo(s)`)
console.log(`${countB} valor(es) negativo(s)`)