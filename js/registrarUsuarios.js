/**En este documento sanearemos y validaremos los datos introducidos por los usuarios en los input */
onload = function () {
    $("#btnRegistrar").on("click", recogerDatos);
    $("#btnDarAlta").on("click", recogerDatos);
    cargarAdmins();
};

var listaUsuarios = [];

function cargarAdmins() {
    if (localStorage.getItem("usuarios") == null) {
        $.get("../datos/administradores.txt", {}, (respuesta) => {
            localStorage.setItem("usuarios", respuesta);
            listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        });
    } else {
        listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
}

function refrescar() {
    location.reload();
}

function recogerDatos() {
    //VALORES RECOGIDOS DEL FORMULARIO DE REGISTRO
    let nombreCompleto = document.getElementById("nombreCompleto");
    let email = document.getElementById("emailNuevo");
    let usuario = document.getElementById("usuarioNuevo");
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");
    if (usuarioRepetido(usuario)) {
        $(".mensajeError").empty();
        $(".mensajeError").append("<span>Este usuario ya existe</span>");
        setTimeout(() => { 
            $(".mensajeError").empty();
        }, 2000);
    } else {
        //compruebo si la contrasena y su confirmacion coinciden llamo a registrar usuario
        if (pass1.value == pass2.value) {
            registrarUsuario(nombreCompleto, email, usuario, pass1, pass2);
            $(".mensajeError").empty();
            $(".mensajeConfirmacion").append(
                "<span>Usuario creado correctamente</span>"
            );
            setTimeout(() => { 
                $(".mensajeConfirmacion").empty();
            }, 2000);
        } else {
            $(".mensajeError").empty();
            $(".mensajeError").append(
                "<span>Las contraseñas no coinciden</span>"
            );
        }
    }
}

//EN ESTA FUNCION COMPROBAMOS SI EL USUARIO QUE SE INTENTA CREAR YA EXISTE
function usuarioRepetido(usuario, nombre, email, pass1, pass2) {
    if (
        listaUsuarios.findIndex((ele) => ele.user.includes(usuario.value)) != -1
    ) {
        return true;
    } else {
        return false;
    }
}

//CON ESTA FUNCION COMPROBAMOS QUE LOS DATOS INTRODUCIDOS CUMPLE UNA SERIE DE CONDICIONES
// function validarDatos(nombreCompleto,email,user,pass1,pass2) {

// }

function registrarUsuario(nombre, email, user, pass1, pass2) {
    var listaUsuarios = [];
    if (localStorage.getItem("usuarios") != null) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    //AQUI CREO EL NUEVO USUARIO EN FORMA DE OBJETO Y LE AÑADO LOS VALORES QUE RECIBE DEL INPUT
    let _usuarios = new usuario(
        nombre.value,
        email.value,
        user.value,
        pass1.value
    );
    //CARGO LOS USUARIOS EN UN ARRAY
    listaUsuarios.push(_usuarios);
    //GUARDO EN EL LOCALSTORAGE EL USUARIO NUEVO
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    pintarUsuarios(user.value,email.value);
}

function pintarUsuarios(usuario,email) {
    let div = document.querySelector("#vistaUsuarios");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Nombre usuario</strong>: ${usuario}
                <strong>E-mail usuario</strong>: ${email}
            </div>
        </div>
    `;
    div.appendChild(nuevoDiv);
}
