$("#Agregar").on('click', function() {
    $("#partidas").append(
        "<tr>\
        <td>\
        <input type = 'text' class = 'clave' />\
        </td>\
        <td>\
        <input type = 'text' class = 'precio' />\
        </td>\
        <td>\
        <input type = 'text' class = 'descripcion' />\
        </td>\
        <td>\
        <input type = 'text'class = 'unidades' />\
        </td>\
        <td>\
        <input type = 'text'  class = 'importe'/>\
        </td>\
        <td>\
        <img  class = 'eliminar' src='https://icons.iconarchive.com/icons/hopstarter/button/128/Button-Delete-icon.png'/>\
        </td>\
        </tr>"
    )


    $(".precio:last, .unidades").on("change", function() {
        var tr = $(this).closest("tr");
        calcularImporte(tr);
    });

    $(".eliminar:last").on("click", function() {
        $(this).closest("tr").remove();
        calcularImporte(tr);


    });
});

function calcularImporte(tr) {
    var precio = Number($(tr).find(".precio").val());
    var unidades = Number($(tr).find(".unidades").val());
    var importe = precio * unidades;
    console.log("importe" + importe);
    $(tr).find(".importe").val(importe);
    calcularSubtotal();

}

function calcularSubtotal() {
    var subtotal = 0;
    $('.importe').each(
        function() {
            subtotal += Number($(this).val());
            console.log('subtotal ', subtotal);

        }
    )
    $("#subtotal").text(subtotal);
    var iva = subtotal * 0.16;
    var total = subtotal + iva;
    $("#iva").text(iva.toFixed(2));
    $("#total").text(total.toFixed(2));
    console.log("El importe es : " + iva);
    console.log("El importe es : " + total);
}