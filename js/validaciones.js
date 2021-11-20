/**En este documento sanearemos los datos introducidos por los usuarios en los input */
onload = function () {
    $("#btnRegistrar").on("click",validar);
    this.alert("hola");
}

var listaUsuarios = [];

function validar() {
    //FORMULARIO
    let form = document.getElementsByTagName("form")[0];

    //VALORES RECOGIDOS DEL FORMULARIO DE REGISTRO
    let email = document.getElementById("emailNuevo");
    let usuario = document.getElementById("usuarioNuevo");
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");

    guardarUsuarios(email,usuario,pass1);

    //VARIABLE ERROR QUE NOS PERMITE SABER SI TODAS LAS VALIDACIONES SON CORRECTAS
    // let error = false;
    //REGEX PARA VALIDAR EMAIL
    // let patronEmail =
    //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
}

function guardarUsuarios(email,user,pass){
    //AQUI CREO EL NUEVO USUARIO EN FORMA DE OBJETO JSON Y LE AÑADO LOS VALORE QUE RECIBE DEL INPUT
    let _usuarios = {
        email: email.value,
        usuario: user.value,
        pass: pass.value
    };
    //GUARDO EN EL LOCALSTORAGE EL USUARIO NUEVO
    localStorage.setItem("usuarios", JSON.stringify(_usuarios));

    //CARGO LOS USUARIOS EN UN ARRAY
    listaUsuarios.push(_usuarios);
    console.log(usuariosNuevos);
}
