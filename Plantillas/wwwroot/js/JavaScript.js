$(document).ready(function () {
    $("img").click(function () {
        $("#header").css('background-color','pink');
    });
    $("img").mouseenter(function () {
        $("#footer").css('background-color', 'cyan');
    });
    $("img").mouseleave(function () {
        $("#footer").css('background-color', 'rgb(164, 72, 80)');
    });
    $("#mostrar").click(function () {
        $("#imagenOculta").show();
    });
    $("#ocultar").click(function () {
        $("#imagenOculta").hide();
    });
    $("body").css('background-color', 'rgb(128, 128, 0)')
    //$("#alerta").click(function () {
    //    $("#entrada").val("hola mundo cruel");
    //    let contenido = $("#entrada").val();
    //    window.alert(contenido)
    //});
    $("#alerta").click(function () {
        let contenido = $("#entrada").val();
        $("#lista").append("<li>" + contenido + "</li >");
    });
   
});
//$(document).ready(function () {
//    $("#boton").click(function () {
//        $("#oculto").addClass('mostrar');
//    });
//});

//$(document).ready(function () {
//    $("boton").on({
//        mouseenter: function () {
//            $("#cuerpo").css("background-color", "lightgray");
//        },
//        mouseleave: function () {
//            $("#cuerpo").css("background-color", "lightblue");
//        },
//        click: function () {
//            window.alert(Hola)
//        }
//    });
//});