(function () { //IIFE

    var contador = 0;

    var cargarPagina = function () {
        $("#twitt-text").submit(agregarTodo);
        $("#text-typo").keyup(validarContenido);
    }

    var agregarTodo = function (e) {
        e.preventDefault();

        var $contenedor = $("#posts");
        var $mensajeContenedor = $("#text-typo");
        var $botonAgregar = $("#send");
        var mensaje = $mensajeContenedor.val();

        // Creamos elementos
        var $postContenedor = $("<article/>", {
            "class": "comment"
        });
        var $post = $("<p/>").append(mensaje);

        // Personalizamos elementos


        // Agregarlos al DOM
        $postContenedor.append($post);

        // Agregarlo a un elemento existente para visualizarlo
        $contenedor.prepend($postContenedor);

        // Borrar contenido de textarea
        mensajeContenedor.value = "";
        $botonAgregar.attr("disabled", true);


    }

    var validar = function () {
        var $botonAgregar = $("#send");
        if ($(this).val().trim().length <= 0) {
            $botonAgregar.attr("disabled", true);
        }else{
            $botonAgregar.removeAttr("disabled");
        }
    }









    //FUNCION QUE INICIALIZA 

    $(document).ready(cargarPagina);

})();
