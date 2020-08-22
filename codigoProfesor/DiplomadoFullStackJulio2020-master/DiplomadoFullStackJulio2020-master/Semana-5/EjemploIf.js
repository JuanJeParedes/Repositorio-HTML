document.write("Ejemplo de IF");

var fecha = new Date();
document.write("<br>");
document.write(fecha);

var diaSemana = fecha.getDay();
document.write("<br>");
document.write(diaSemana);

document.write("<br>");
var lunes = new Date(2020, 07, 03);
document.write("<br>");
document.write(lunes);
document.write("<br>");
document.write(lunes.getDay());


var a = 5;
a = '5';
var b = 'Paola';
document.write("<br>");
document.write("<br>");
document.write("<br>");

// = Asignar valor 
// == Comparar contenido
//=== Compara contenido + Tipo de Dato 

if (a === '5' && horaDia == 2) {
    document.write("El valor es 5");
}
if (b == 'Paola') {
    document.write('El nombre es Paola');
} else {
    document.write("Es otro valor");
}

// EJERCICIO 
// variable que tenga la fecha actual 
// variable que sea sabado pero despues de las 
// var que sea domingo 


// Dependiendo de la hora y el dia
// Si el dia es sabado y la hora es entre las 9 y las 2 de la tarde 
// Imprimir estoy en clase

// la hora es entre las 11:30 y 12:00 
// imprimir, es la hora de la comida

// La hora es despues de las 2 de la tarde decir (ya acabe el curso)
// Si es otro dia imprimir (Hoy no es dia de curso)