/**En este documento sanearemos y validaremos los datos introducidos por los usuarios en los input */
onload = function () {
    $("#btnRegistrar").on("click", recogerDatos);
    $("#resenasItem").hide();
    usuarioAdmin();
};

var listaUsuarios = [];

function usuarioAdmin() {
    // si la primera vez esta vacio genero un usuario admin
    if (localStorage.getItem("usuarios") == null) {
        //Creo un usuario admin
        let _usuarios = new usuario(
            (nombre = "admin web"),
            (email = "admin@tgt.com"),
            (user = "admin"),
            (pass = "admin")
        );
        //CARGO LOS USUARIOS EN UN ARRAY
        listaUsuarios.push(_usuarios);
        //GUARDO EN EL LOCALSTORAGE EL USUARIO NUEVO
        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }
}

//REGEX PARA VALIDAR EMAIL
// let patronEmail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function recogerDatos() {
    //VALORES RECOGIDOS DEL FORMULARIO DE REGISTRO
    let nombreCompleto = document.getElementById("nombreCompleto");
    let email = document.getElementById("emailNuevo");
    let usuario = document.getElementById("usuarioNuevo");
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");

    registrarUsuario(nombreCompleto, email, usuario, pass1);
}

function registrarUsuario(nombre, email, user, pass) {
    if (localStorage.getItem("usuarios") != null) {
        //AQUI CREO EL NUEVO USUARIO EN FORMA DE OBJETO JSON Y LE AÑADO LOS VALORES QUE RECIBE DEL INPUT
    let _usuarios = new usuario(
        nombre.value,
        email.value,
        user.value,
        pass.value
    );
    //CARGO LOS USUARIOS EN UN ARRAY
    listaUsuarios.push(_usuarios);
    //GUARDO EN EL LOCALSTORAGE EL USUARIO NUEVO
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }
    
}
