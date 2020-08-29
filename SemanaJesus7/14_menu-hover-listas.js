$(function() {
    $(".imgproducto").hover(function() {
            $(this).find(".contenedor").stop().animate({ top: '0px' }, 500);
        },
        function() {
            $(this).find(".contenedor").stop().animate({ top: '222px' }, 500);
        }
    );
});