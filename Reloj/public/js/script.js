
$(document).ready(function () {


    $(".verruta").on("click",function (){
        $("#mymodalruta").modal("show");
        
    });

})

function agregarCarrito(idU, codigoP) {
    var parametros = {"idU": idU, "codigoP": codigoP};
    $.ajax(
            {
                data: parametros,
                url: '?controlador=Index&accion=agregarCarrito',
                type: 'post',
                beforeSend: function () {
                    $("#resultadoCa" + codigoP).html("Agregando...");
                    $("#resultadoCa1" + codigoP).html("Agregando...");
                },
                success: function (response) {
                    $("#resultadoCa" + codigoP).html(response);
                    $("#resultadoCa1" + codigoP).html(response);
                }
            }
    );

}
