$(document).ready(function () {
    //Boton añadir tarjeta
    $('#btnGuardar').click(function () {
        var nombreRestaurante = $('#nombreRestaurante').val();
        var ubicacion = $('#ubicacion').val();
        var tipo = $('#tipo').val();
        var comentario = $('#floatingTextarea').val();
        var imagen = $('#formFile').val();
        $('#card-1').removeClass('hidden');
        $('.card-title').html(nombreRestaurante);
        $('.card-text').html(comentario);

        var contador = $('.card').length + 1;
        var bloque = '<div id="card-' + contador + '"class="card galeria">texto prueba</div>';
        var img = $('<img class="card-img-top">');
        img.attr('src', '');
        img.appendTo('#card-2');
        $('#tarjetas').append(bloque);
        var cardBody = $('<div class="card-body"></div>');
        $(bloque).append(cardBody);
    });
});




