onload = function () {
    $("#btnAcceder").on("click", comprobarUsuarios);
};
var listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));

/* AQUI COMPROBAMOS SI EL USUARIO QUE SE VA A VALIDAR YA HA SIDO DADO DE ALTA PREVIAMENTE EN EL LOCALSTORAGE */
function comprobarUsuarios() {
    //valores input del login
    let inputUsuario = document.getElementById("usuario");
    let inputPass = document.getElementById("password");

    //comprobamos si los campos estan vacios
    if (inputUsuario.value == "" || inputPass.value == "") {
        $(".mensajeError").empty();
        $(".mensajeError").append("<span>Hay uno de los campos vacios</span>");
    } else {
        //SI NO, BUSCAMOS EN NUESTRO ARRAY DE USUARIOS SI SE ENCUENTRA EL USUARIO INSERTADO
        let usuarioAbuscar = document.getElementById("usuario").value;
        let usuarioEncontrado = listaUsuarios.filter((usuarios) =>
            usuarios.user.includes(usuarioAbuscar)
        );
        console.log(usuarioEncontrado);
        if (usuarioEncontrado) {
            iniciarSesion(inputUsuario.value,inputPass.value);
        }
    }
}

//CON ESTA FUNCION LE LLEGA EL USUARIO QUE SI ESTA REGISTRADO PORQUE SE HA COMPROBADO ANTERIORMENTE, COMPROBAMOS SI EL USUARIO COINCIDE CON LA CONTRASENA
function iniciarSesion(usuario, pass) {
    //contrasena almacenada en el localstorage del usuario

    //comprobamos que el usuario coincide con su contrasena
    // if (pass == localPassword) {
    //     console.log("usuario y contrasena correcto puede acceder");
    // } else {
    //     console.log("la contrasena no es la correcta");
    // }
}

function cargarHomeUsuario(usuario) {
    location.href("../index.html");
    let listaNav = document.getElementById("menuNav");
    let perfilUsuario = document.createElement("li");
    listaNav.appendChild(perfilUsuario);
    perfilUsuario.classList("nav-item");
    let enlace = document.createElement("link");
    perfilUsuario.appendChild(enlace);
}
