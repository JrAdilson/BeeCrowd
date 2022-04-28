var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
let tipo = lines.shift()
let espec = lines.shift()
let espectipo = lines.shift()

if(tipo === 'vertebrado'){
    if(espec === 'ave'){
        if(espectipo === 'carnivoro'){
            console.log('aguia')
        }else{
            console.log('pomba')
        }
    }
}else{
    if(espec === 'mamifero'){
        if(espectipo === 'onivoro'){
            console.log('homem')
        }
    }else{
        console.log('vaca')
    }
} 
if(tipo === 'invertebrado'){
    if(espec === 'inseto'){
        if(espectipo === 'hematofago'){
            console.log('pulga')
        }else{
            console.log('lagarta')
        }
    }
}else{
    if(espec === 'anelideo'){
        if(espectipo === 'hematofago'){
            console.log('sanguessuga')
        }
    }else{
        console.log('minhoca')
    }
}