var tr;

$("#agregar").on('click', function() {
    $("#partidas").append(
        "<tr>\
        <td>\
        <input type='text' class='clave'/>\
        </td>\
        <td>\
        <input type='text' class='precio'/>\
        </td>\
        <td>\
        <input type='text' class='descripcion'/>\
        </td>\
        <td>\
        <input type='text' class='unidades'/>\
        </td>\
        <td>\
        <input type='text' class='importe' readonly='readonly'/>\
        </td>\
        <td>\
        <img class='eliminar' src='https://icons.iconarchive.com/icons/hopstarter/button/256/Button-Delete-icon.png'/>\
        </td>\
        </tr>"
    );
    $(".precio:last, .unidades:last").on("change", function() {
        var tr = $(this).closest("tr");
        calcularImporte(tr);
        calcularTotal();
        console.log("BANDERA")
    });

    

    //remove()

});



function calcularImporte(tr) {
    var precio = Number($(tr).find(".precio").val());
    var unidades = Number($(tr).find(".unidades").val());

    // console.log("El precio es: " + precio);
    // console.log("Las unidades son : " + unidades);

    var importe = precio * unidades;
    console.log(importe);

    $(tr).find('.importe').val(importe);

}

function calcularTotal() {
    var subtotal = 0;
    $('.importe').each(
        function() {
            subtotal += Number($(this).val());
            console.log('subtotal ', subtotal);
        }
    );
    $("#subtotal").text(subtotal);

    var iva = subtotal * 0.16;
    var total = iva + subtotal;

    $("#iva").text(iva.toFixed(2));
    console.log(iva, 'total', total)
    $("#total").text(total.toFixed(2));


}