window.onload = function () {
    pedirRestaurantes();
}
let listaRestaurantes = [];

function pedirRestaurantes(){
    $.get("../datos/restaurantes.txt",{},(respuesta)=>{
        listaRestaurantes = JSON.parse(respuesta);
        cargarTarjetas(listaRestaurantes);
    });
}

function cargarTarjetas(lista) {
    //localizo div donde van a ir las tarjetas
    var divTarjetas = document.getElementById('tarjetas');
    lista.forEach(restaurante => {
        //creo la tarjeta con las clase card y galeria
        var tarjeta = document.createElement("div");
        tarjeta.classList.add("card","galeria");
        tarjeta.appendChild(divTarjetas);
        //añado imagen de la tarjeta
        var imagen = document.createElement("img");
        imagen.src = restaurante.imagen;
        imagen.className = "card-img-top";
        tarjeta.appendChild(imagen);
        //creo div con la clase card-body
        // var cuerpoTarjeta = document.createElement("div");
        // cuerpoTarjeta.classList.add('card-body');
        // tarjeta.appendChild(cuerpoTarjeta)
        //genero titulo h5 con el nombre del restaurante
        // var tituloRestaurante = document.createElement("h5");
        // tituloRestaurante.classList.add('card-title');
        // tituloRestaurante.innerHTML = restaurante.nombre;
        //genero parrafo con una pequeña reseña
        // var parrafoResena = document.createElement("p");
        // parrafoResena.classList.add('card-text');
        // parrafoResena.innerHTML = restaurante.resena;

    });
}