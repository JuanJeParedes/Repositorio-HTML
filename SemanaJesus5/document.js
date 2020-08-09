/*Ejercicio 1
document.write("A");

var fecha = new Date();
document.write("<br>");
document.write(fecha);

var diaSemana = fecha.getDay();
document.write("<br>");
document.write(diaSemana);

document.write("<br>");
var lunes = new Date(2020, 08, 03);
document.write("<br>");
document.write(lunes);
document.write("<br>");
document.write(lunes.getDay());    */

/*ejercicio  2*/
var fecha = new Date();
var hora = fecha.getHours();
var dia = fecha.getDay();

document.write("<br>");
document.write("Ejercicio *******************************************   ");
document.write("<br>");
document.write("En base al dia y la hora me dira si estoy en clase, en hora de comida o fuera de clase");
document.write("<br>");
document.write("***************************************************   ");
document.write("<br>");
document.write("<br>");
document.write("Día de la semana = ", dia);
document.write("<br>");
document.write("La hora  =  ", hora);

if (dia === 6) {
    document.write("<br>");
    document.write("Good day, today is saturday");
    if ((hora > 9 && hora < 12) || (hora > 13 && hora < 14)) {
        document.write(" y estoy en clase")
    } else if (hora > 12 && hora < 13) {
        document.write(" Estoy en la hora de comida")
    } else {
        document.write(" y No estoy en clase.")
    }
} else {
    document.write("Hoy no es sabado y No estoy en clase, hoy es ", dia);
    document.write(" y son las ", hora, "hrs.");
}
/* Comentario; */