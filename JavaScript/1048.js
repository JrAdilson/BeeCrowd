var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let salario = +lines.shift()
let reajuste;
let newSalario;
if(salario <= 400.00){
    newSalario = salario * 1.15
    reajuste = salario * 0.15
    console.log(`Novo salario: ${newSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 15 %`)
}else if(salario <= 800.00){
    newSalario = salario * 1.12
    reajuste = salario * 0.12
    console.log(`Novo salario: ${newSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
}else if(salario <= 1200.00){
    newSalario = salario * 1.10
    reajuste = salario * 0.10
    console.log(`Novo salario: ${newSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
}else if(salario <= 2000.00){
    newSalario = salario * 1.07
    reajuste = salario * 0.07
    console.log(`Novo salario: ${newSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
}else if(salario > 2000.00){
    newSalario = salario * 1.04
    reajuste = salario * 0.04
    console.log(`Novo salario: ${newSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}