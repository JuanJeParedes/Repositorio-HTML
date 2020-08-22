$(document).ready(
    function() {
        // Primer "ACCION"
        $("#tarea").on("focus", function() {
            $(this).css("background-color", "orange");
        });

        // 
        $("#editar").on("mouseenter", function() {
            $(this).css("text-transform", "uppercase");
            $("#tarea").css("border", "1px solid blue");
        });

        $("#editar").on("click", function() {
                var txt = $(this).text();

                if (txt === "Editar") {
                    $(this).text("Finalizar"); //afectar mismo elemento
                    $("#agregar").removeAttr("disabled"); // afectar otro elemento
                    $("#tarea").css("border", "1px solid red");
                    // } else {
                    //     $(this).text("Editar");
                    //     $("#agregar").attr("disabled", "disabled");
                }
            }


        );
        var nuevaTarea;

        $("#AgregarI").on("click", function(param) { // Paso 0
            nuevaTarea = $("#tarea").val(); // 1er Paso
            $("ul#cosas").prepend("<li>" + nuevaTarea + "</li>") //paso 3 y 4
                //   $("ul#cosas").prepend("<li>" + nuevaTarea + "</li>") //paso 3 y 4

        });

        $("#AgregarF").on("click", function(param) {
            nuevaTarea = $("#tarea").val();
            $("ul#cosas").append("<li>" + nuevaTarea + "</li>")
        });







    }
);