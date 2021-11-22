onload = function () {
    $("#btnAcceder").on("click", comprobarUsuarios);
    $("#btnRegistro").click(function () {
        location.href = "../registro.html";
    });
    // $("#perfilUsuario").hide();
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
                iniciarSesion(usuarios.user, usuarios.pass);
            }
        });
    }
}

//CON ESTA FUNCION LE LLEGA EL USUARIO QUE SI ESTA REGISTRADO PORQUE SE HA COMPROBADO ANTERIORMENTE, COMPROBAMOS SI EL USUARIO COINCIDE CON LA CONTRASENA
function iniciarSesion(usuario, pass) {
    let inputPass = document.getElementById("password");
    //comprobamos que el usuario coincide con su contrasena
    if (pass == inputPass.value) {
        $(".mensajeError").empty();
        console.log("usuario y contrasena correcto puede acceder");
        cargarHomeUsuario(usuario);
    } else {
        $(".mensajeError").empty();
        $(".mensajeError").append("<span>El usuario/contrasena son incorrectos</span>");
    }
}

function cargarHomeUsuario(usuario) {
    // location.href = "../index.html";
    // console.log(document.getElementById("loguearse"));
    console.log("Aqui debo llevarte al perfil usuario");
    $("#loguearse").empty();
    $("#loguearse").text(usuario);

    // $("#perfilUsuario").show();
    // location.href = "../index.html";
}
