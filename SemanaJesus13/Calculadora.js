const math = require('./Operaciones');
const readLine = require('readLine-sync');

const nombre = require('./Nombre.js');
nombre.pedirNombre();

console.log('¿Que operacion quieres hacer? a.Suma b.Resta  c.Multiplicacion d.Division');
let opcion = readLine.question('Escribe tu opcion:  ');

if (opcion === 'a') {
    console.log(math.suma());
}
if (opcion === 'b') {
    console.log(math.resta());
}
if (opcion === 'c') {
    console.log(math.multiplicacion());
}
if (opcion === 'd') {
    console.log(math.division());
}