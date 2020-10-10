const readLine = require('readLine-sync');

//wait for user´s 
function pedirNombre() {
    let nombre = readLine.question('Escribe tu nombre:  ');
    console.log('Hola', nombre, );
}
exports.pedirNombre = pedirNombre;