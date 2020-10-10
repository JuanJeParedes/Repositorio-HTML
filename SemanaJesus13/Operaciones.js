const readLine = require('readLine-sync');
const Operaciones = {}
var a;
var b;

function suma(a, b) {
    a = readLine.question('Dame el primer numero:     ');
    b = readLine.question('Dame el segundo numero:    ');
    var resultado = parseFloat(a) + parseFloat(b);
    console.log('El resultado de la suma es: ', resultado);
}

function resta(a, b) {
    a = readLine.question('Dame el primer numero:     ');
    b = readLine.question('Dame el segundo numero:    ');
    var resultado = parseFloat(a) - parseFloat(b);
    console.log('El resultado de la resta es: ', resultado);
}

function multiplicacion(a, b) {
    a = readLine.question('Dame el primer numero:     ');
    b = readLine.question('Dame el segundo numero:    ');
    var resultado = parseFloat(a) * parseFloat(b);
    console.log('El resultado de la multiplicacion es: ', resultado);
}

function division(a, b) {
    a = readLine.question('Dame el primer numero:     ');
    b = readLine.question('Dame el segundo numero:    ');
    var resultado = parseFloat(a) / parseFloat(b);
    console.log('El resultado de la division es: ', resultado);
}
module.exports = Operaciones;
Operaciones.suma = suma;
Operaciones.resta = resta;
Operaciones.multiplicacion = multiplicacion;
Operaciones.division = division;