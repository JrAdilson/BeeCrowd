var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');
var tp1 = lines.shift().trim();
var tp2 = lines.shift().trim();
var tp3 = lines.shift().trim();

switch (tp1) {
    case 'vertebrado':
        switch (tp2) {
            case 'ave': switch (tp3) {
                            case 'carnivoro': console.log('aguia'); break;
                            case 'onivoro': console.log('pomba'); break;
                            default: break;
                        } break;
            case 'mamifero':switch (tp3) {
                            case 'onivoro': console.log('homem'); break;
                            case 'herbivoro': console.log('vaca'); break;
                            default: break;
                        } break;
            default: break;
        }
        break;
    case 'invertebrado':
        switch (tp2) {
            case 'inseto': switch (tp3) {
                            case 'hematofago': console.log('pulga'); break;
                            case 'herbivoro': console.log('lagarta'); break;
                            default: break;
                        } break;
            case 'anelideo':switch (tp3) {
                            case 'hematofago': console.log('sanguessuga'); break;
                            case 'onivoro': console.log('minhoca'); break;
                            default: break;
                        } break;
            default: break;
        }
        break;
    default:
        break;
}