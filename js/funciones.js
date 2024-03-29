window.onload = function () {
    pedirRestaurantes();
    mostrarAnadir();
    btnBuscar();
};

let listaRestaurantes = [];

function pedirRestaurantes() {
    if (localStorage.getItem("datos") == null) {
        $.get("../datos/restaurantes.txt", {}, (respuesta) => {
            listaRestaurantes = JSON.parse(respuesta);
            cargarTarjetas(listaRestaurantes);
        });
    } else {
        listaRestaurantes = JSON.parse(localStorage.getItem("datos"));
        cargarTarjetas(listaRestaurantes);
    }
}

function cargarTarjetas(lista) {
    //localizo div donde van a ir las tarjetas
    let divTarjetas = document.getElementById("tarjetas");
    lista.forEach((restaurante) => {
        //creo la tarjeta con las clase card y galeria
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "galeria");
        tarjeta.style.width = "18rem";
        divTarjetas.appendChild(tarjeta);
        //añado imagen de la tarjeta
        let imagen = document.createElement("img");
        imagen.src = restaurante.imagen;
        imagen.className = "card-img-top";
        tarjeta.appendChild(imagen);
        //creo div con la clase card-body
        let cuerpoTarjeta = document.createElement("div");
        cuerpoTarjeta.classList.add("card-body");
        tarjeta.appendChild(cuerpoTarjeta);
        //genero titulo h5 con el nombre del restaurante
        let tituloRestaurante = document.createElement("h5");
        tituloRestaurante.classList.add("card-title");
        tituloRestaurante.innerHTML = restaurante.nombre;
        cuerpoTarjeta.appendChild(tituloRestaurante);
        //genero parrafo con una pequeña reseña
        let parrafoResena = document.createElement("p");
        parrafoResena.classList.add("card-text");
        parrafoResena.innerHTML = restaurante.resena;
        cuerpoTarjeta.appendChild(parrafoResena);
        //anado boton para editar contenido
        let btnEditar = document.createElement("a");
        btnEditar.classList.add("btn", "btn-danger");
        btnEditar.style.marginRight = "5px";
        btnEditar.innerHTML = "<i class='fas fa-edit mx-1'></i>Editar";
        cuerpoTarjeta.appendChild(btnEditar);
        //anado boton para eliminar
        let btnEliminar = document.createElement("a");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.id = "btn-eliminar";
        btnEliminar.innerHTML = "<i class='fas fa-trash-alt mx-1'></i>Eliminar";
        cuerpoTarjeta.appendChild(btnEliminar);
        //le anadimos la funcion eliminar en el evento click
        btnEliminar.addEventListener("click", function () {
            let indice = listaRestaurantes.indexOf(restaurante);
            if (indice > -1) {
                listaRestaurantes.splice(indice, 1);
            }
            localStorage.setItem("datos", JSON.stringify(listaRestaurantes));
        });
            //añadimos funcion para llamar a la funcion eliminar que eliminará el div
         btnEliminar.addEventListener("click",(function(x) {
            return ()=> eliminar(x)
        })(tarjeta));
    });
}

function mostrarAnadir() {
    let btnAnadir = document.querySelector("#btn-add");
    btnAnadir.addEventListener("click", recogerDatos);
}

//localizo el modal que esta oculto que aparece cuando pulsamos en el boton anadir y le anadimos un evento al boton guardar del modal
function recogerDatos() {
    //localizo boton guardar del modal que aparece cuando pulso en anadir
    let btnGuardarTarjeta = document.getElementById("btnGuardar");
    btnGuardarTarjeta.addEventListener("click", anadirTarjeta);
}

//con esta funcion generamos una nueva tarjeta con los datos recogidos del input del modal
function anadirTarjeta() {
    //recojo datos de los inputs
    let nombreRestaurante = document.getElementById("nombreRestaurante").value;
    let ubicacionRestaurante = document.getElementById("ubicacion").value;
    let tipoRestaurante = document.getElementById("tipo").value;
    let resena = document.getElementById("floatingTextarea").value;
    let imagenRestaurante = document.getElementById("formFile").files[0].name;

    // guardo datos del restaurante nuevo añadido en forma de objeto
    let restaurantesNuevo = {
        nombre: nombreRestaurante,
        ubicacion: ubicacionRestaurante,
        tipo: tipoRestaurante,
        resena: resena,
        imagen: "../img/" + imagenRestaurante,
    };

    //envio datos al array
    listaRestaurantes.push(restaurantesNuevo);

    //Mi local Storage
    let miStorage = window.localStorage;
    localStorage.setItem("datos", JSON.stringify(listaRestaurantes));
    let guardado = JSON.parse(localStorage.getItem("datos"));

    //localizo div donde van a ir las tarjetas
    let divTarjetas = document.getElementById("tarjetas");

    //genero la tarjeta con los datos recogidos de los inputs
    //creo la tarjeta con las clase card y galeria
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "galeria");
    tarjeta.style.width = "18rem";
    divTarjetas.appendChild(tarjeta);
    //añado imagen de la tarjeta
    let imagen = document.createElement("img");
    imagen.src = "./img/" + imagenRestaurante;
    imagen.className = "card-img-top";
    tarjeta.appendChild(imagen);
    //creo div con la clase card-body
    let cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList.add("card-body");
    tarjeta.appendChild(cuerpoTarjeta);
    //genero titulo h5 con el nombre del restaurante
    let tituloRestaurante = document.createElement("h5");
    tituloRestaurante.classList.add("card-title");
    tituloRestaurante.innerHTML = nombreRestaurante;
    cuerpoTarjeta.appendChild(tituloRestaurante);
    //genero parrafo con una pequeña reseña
    let parrafoResena = document.createElement("p");
    parrafoResena.classList.add("card-text");
    parrafoResena.innerHTML = resena;
    cuerpoTarjeta.appendChild(parrafoResena);
    //anado boton para editar contenido
    let btnEditar = document.createElement("a");
    btnEditar.classList.add("btn", "btn-danger");
    btnEditar.style.marginRight = "5px";
    btnEditar.innerHTML = "<i class='fas fa-edit mx-1'></i>Editar";
    cuerpoTarjeta.appendChild(btnEditar);
    //anado boton para eliminar
    let btnEliminar = document.createElement("a");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.id = "btn-eliminar";
    btnEliminar.innerHTML = "<i class='fas fa-trash-alt mx-1'></i>Eliminar";
    cuerpoTarjeta.appendChild(btnEliminar);
    //añadimo funcion al boton eliminar para eliminar del array el objeto creado
    btnEliminar.addEventListener("click", function () {
        let indice = listaRestaurantes.indexOf(restaurantesNuevo);
        if (indice > -1) {
            listaRestaurantes.splice(indice, 1);
        }
        localStorage.setItem("datos", JSON.stringify(listaRestaurantes));
    });
    //añadimos funcion para llamar a la funcion eliminar que eliminará el div
    btnEliminar.addEventListener("click",(function(x) {
        return ()=> eliminar(x)
    })(tarjeta));


    //cerramos ventana del formulario
    $("#cerrar").click();
    $("#cerrar").on('click');
}

function eliminar(tarjeta) {
    let divTarjetas = document.querySelector("#tarjetas");
    let tarjetaEliminada = divTarjetas.removeChild(tarjeta);
}

//boton buscar y le añadimos evento de la funcion

function btnBuscar() {
    let btnBuscar = document.querySelector("#btn-buscar");
    btnBuscar.addEventListener("click", buscar);
}

function limpiarTarjetas(){
    // let tarjetas = Array.prototype.slice.call(document.getElementsByClassName("card"),0);
    // for(element of tarjetas){
    //     element.remove();
    // }
    $(".card").remove();
}

//creamos funcion para buscar
function buscar() {
    limpiarTarjetas();
    let textoAbuscar = document.querySelector("#palabraParaBuscar");
    let filtro = textoAbuscar.value.trim().toLowerCase();
    if (filtro == "") {
        cargarTarjetas(listaRestaurantes);
    } else {
        let listaFiltrada = listaRestaurantes.filter((restaurante) =>
        restaurante.nombre.toLowerCase().includes(filtro)
    );
    cargarTarjetas(listaFiltrada);
    }
}

function editarTarjeta() {
    
}