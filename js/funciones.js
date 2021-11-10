window.onload = function () {
    pedirRestaurantes();
    mostrarAnadir();
};
let listaRestaurantes = [];

function pedirRestaurantes() {
    if (localStorage.getItem('datos') == null) {
        $.get("../datos/restaurantes.txt", {}, (respuesta) => {
            listaRestaurantes = JSON.parse(respuesta);
            cargarTarjetas(listaRestaurantes);
        });    
    } else {
        listaRestaurantes = JSON.parse(localStorage.getItem('datos'));
        console.log(listaRestaurantes);
        cargarTarjetas(listaRestaurantes);
    }
    
}

function cargarTarjetas(lista) {
    //localizo div donde van a ir las tarjetas
    var divTarjetas = document.getElementById("tarjetas");
    lista.forEach((restaurante) => {
        //creo la tarjeta con las clase card y galeria
        var tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "galeria");
        tarjeta.style.width = "18rem";
        divTarjetas.appendChild(tarjeta);
        //añado imagen de la tarjeta
        var imagen = document.createElement("img");
        imagen.src = restaurante.imagen;
        imagen.className = "card-img-top";
        tarjeta.appendChild(imagen);
        //creo div con la clase card-body
        var cuerpoTarjeta = document.createElement("div");
        cuerpoTarjeta.classList.add("card-body");
        tarjeta.appendChild(cuerpoTarjeta);
        //genero titulo h5 con el nombre del restaurante
        var tituloRestaurante = document.createElement("h5");
        tituloRestaurante.classList.add("card-title");
        tituloRestaurante.innerHTML = restaurante.nombre;
        cuerpoTarjeta.appendChild(tituloRestaurante);
        //genero parrafo con una pequeña reseña
        var parrafoResena = document.createElement("p");
        parrafoResena.classList.add("card-text");
        parrafoResena.innerHTML = restaurante.resena;
        cuerpoTarjeta.appendChild(parrafoResena);
        //anado boton para editar contenido
        var btnEditar = document.createElement("a");
        btnEditar.classList.add("btn", "btn-danger");
        btnEditar.style.marginRight = "5px";
        btnEditar.innerHTML = "<i class='fas fa-edit mx-1'></i>Editar";
        cuerpoTarjeta.appendChild(btnEditar);
        //anado boton para eliminar
        var btnEliminar = document.createElement("a");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.id = "btn-eliminar";
        btnEliminar.innerHTML = "<i class='fas fa-trash-alt mx-1'></i>Eliminar";
        btnEliminar.addEventListener("click",(function(x) {
            return ()=> eliminar(x)
        })(tarjeta));
        cuerpoTarjeta.appendChild(btnEliminar);
    });
}

function mostrarAnadir() {
    var btnAnadir = document.querySelector("#btn-add");
    btnAnadir.addEventListener("click", recogerDatos);
}

//localizo el modal que esta oculto que aparece cuando pulsamos en el boton anadir y le anadimos un evento al boton guardar del modal
function recogerDatos() {
    //localizo boton guardar del modal que aparece cuando pulso en anadir
    var btnGuardarTarjeta = document.getElementById("btnGuardar");
    btnGuardarTarjeta.addEventListener("click", anadirTarjeta);
}

//con esta funcion generamos una nueva tarjeta con los datos recogidos del input del modal
function anadirTarjeta() {
    //recojo datos de los inputs
    var nombreRestaurante = document.getElementById("nombreRestaurante").value;
    var ubicacionRestaurante = document.getElementById("ubicacion").value;
    var tipoRestaurante = document.getElementById("tipo").value;
    var resena = document.getElementById("floatingTextarea").value;
    var imagenRestaurante = document.getElementById("formFile").files[0].name;

    // recojo datos del restaurante nuevo añadido
    var restaurantesNuevos = {"nombre":nombreRestaurante,"ubicacion":ubicacionRestaurante,"tipo":tipoRestaurante,"resena":resena,"imagen":"../img/"+imagenRestaurante};

    //envio datos al array
    listaRestaurantes.push(restaurantesNuevos);
    
    //Mi local Storage
    var miStorage = window.localStorage;
    localStorage.setItem('datos',JSON.stringify(listaRestaurantes));
    var guardado = JSON.parse(localStorage.getItem('datos'));

    

    //localizo div donde van a ir las tarjetas
    var divTarjetas = document.getElementById("tarjetas");

    //genero la tarjeta con los datos recogidos de los inputs
    //creo la tarjeta con las clase card y galeria
    var tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "galeria");
    tarjeta.style.width = "18rem";
    divTarjetas.appendChild(tarjeta);
    //añado imagen de la tarjeta
    var imagen = document.createElement("img");
    imagen.src = "./img/"+imagenRestaurante;
    imagen.className = "card-img-top";
    tarjeta.appendChild(imagen);
    //creo div con la clase card-body
    var cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList.add("card-body");
    tarjeta.appendChild(cuerpoTarjeta);
    //genero titulo h5 con el nombre del restaurante
    var tituloRestaurante = document.createElement("h5");
    tituloRestaurante.classList.add("card-title");
    tituloRestaurante.innerHTML = nombreRestaurante;
    cuerpoTarjeta.appendChild(tituloRestaurante);
    //genero parrafo con una pequeña reseña
    var parrafoResena = document.createElement("p");
    parrafoResena.classList.add("card-text");
    parrafoResena.innerHTML = resena;
    cuerpoTarjeta.appendChild(parrafoResena);
    //anado boton para editar contenido
    var btnEditar = document.createElement("a");
    btnEditar.classList.add("btn", "btn-danger");
    btnEditar.style.marginRight = "5px";
    btnEditar.innerHTML = "<i class='fas fa-edit mx-1'></i>Editar";
    cuerpoTarjeta.appendChild(btnEditar);
    //anado boton para eliminar
    var btnEliminar = document.createElement("a");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.id = "btn-eliminar";
    btnEliminar.innerHTML = "<i class='fas fa-trash-alt mx-1'></i>Eliminar";
    cuerpoTarjeta.appendChild(btnEliminar);
    //le anadimos la funcion eliminar en el evento click
    btnEliminar.addEventListener("click",(function(x) {
        return ()=> eliminar(x)
    })(tarjeta));
}

function eliminar(tarjeta) {
    var divTarjetas = document.querySelector("#tarjetas");
    var tarjetaEliminada = divTarjetas.removeChild(tarjeta);
}

// localizamos boton buscar
var btnBuscar = document.querySelector("#btn-buscar");

// function buscarRestaurante() {
//     let filtro = document.getElementById('palabraParaBuscar').value.trim().toLowerCase();
//     if (filtro == "") {
//         filtro.innerHTML = "No se admiten cadenas vacias";
//     }else {
//         let listaFiltrada = 
//     }
// }
