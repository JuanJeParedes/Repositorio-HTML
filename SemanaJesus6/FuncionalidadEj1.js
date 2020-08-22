$(document).ready(
function() {
    // Primer "ACCION"
    $("#tarea").on("focus", function() {
        $(this).css("background-color", "yellow");
    });

    // 
    $("#editar").on("mouseenter", function() {
        $(this).css("text-transform", "uppercase");
    });

    $("#editar").on("click", function() {
            var txt = $(this).text();

            //            if (txt === "Editar") {
            //                $(this).text("Finalizar"); //afectar mismo elemento
            //    $("#agregar").removeAttr("disabled"); // afectar otro elemento
            //                $("#tarea").css("border", "1px solid red");
            //            } else {
            //                $(this).text("Editar");
            //                $("#agregar").attr("disabled", "disabled");
        }
    });

$("agregar").on("click", function(param) {
    var nuevaTarea = $("#tarea").val();
    console.log(nuevaTarea);
});


});