var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let salario = +lines.shift()
let newSalario = 0;
if(salario <= 2000.00){
    console.log('Isento')
}else if(salario>=2000.01 && salario<=3000.00){
    salario -= 2000.00
    newSalario = salario*(8/100)
    console.log(`R$ ${newSalario.toFixed(2)}`)
}else if(salario>=3000.01 && salario<=4500.00){
    salario -= 2000.00
    newSalario = salario*(18/100)
    console.log(`R$ ${newSalario.toFixed(2)}`)
}else if(salario>=4500.01){
    salario -= 2000.00
    newSalario = salario*(28/100)
    console.log(`R$ ${newSalario.toFixed(2)}`)
}