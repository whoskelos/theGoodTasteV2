onload = function () {
    $("#resenasItem").hide();
    if (sessionStorage.getItem("usuarioLogueado") != null) {
        location.href = "../index.html";
    }else{
        $("#btnAcceder").on("click", comprobarUsuarios);
        $("#btnRegistro").click(function () {
            location.href = "../registro.html";
        });
    }
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
        let usuarioEncontrado = listaUsuarios.filter((usuarios) => {
            if (usuarios.user.includes(usuarioAbuscar)) {
                //si esxiste le mandamos el usuario y contraseña a la funcion iniciar sesion
                iniciarSesion(usuarios.user, usuarios.pass);
            }
        });
    }
}

//CON ESTA FUNCION LE LLEGA EL USUARIO QUE SI ESTA REGISTRADO PORQUE SE HA COMPROBADO ANTERIORMENTE, COMPROBAMOS SI EL USUARIO COINCIDE CON LA CONTRASEÑA
function iniciarSesion(usuario, pass) {
    //esta variable guardamos el input donde el usuario escribirá la contraseña
    let inputPass = document.getElementById("password");
    // comprobamos que si el usuario insertado es el admin le redirigimos a la web del panel de administrador
    if (usuario == "admin" && pass == inputPass.value) {
        location.href = "../panelAdmin.html";
    //comprobamos que cualquier usuario distinto de admin coincide con su contraseña almacenada 
    } else if (pass == inputPass.value) {
        //almacenamos el usuario en una variable del sessionstorage
        sessionStorage.setItem("usuarioLogueado", usuario);
        $(".mensajeError").empty();
        mostrarResenas();
    } else {
        sessionStorage.removeItem("usuarioLogueado");
        $(".mensajeError").empty();
        $(".mensajeError").append(
            "<span>El usuario/contrasena son incorrectos</span>"
        );
    }
}

//esta funcion es llamada si el usuario se ha logueado correctamente le llevamos al apartado de resenas.html
function mostrarResenas() {
    location.href = "../resenas.html";
}
