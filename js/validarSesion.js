onload = function () {
    comprobarSesion();
    cargarAdmins();
}

//comprobamos que si la key usuarioLogueado de sessionstorage tiene algun valor, si no tiene ningun valor es decir ningun usuario ha hecho login, el boton de cerrar sesion está oculto junto con el de resenas, si hay un usuario logueado se ocultará la opcion de iniciar sesion y se muestra la opcion resenas y cerrar sesion en el menud de navegacion

function comprobarSesion() {
    if (sessionStorage.getItem("usuarioLogueado") != null ) {
        $("#loginItem").hide();
        $("#btnLogout").show();
    }else{
        $("#resenasItem").hide();
        $("#btnLogout").hide();
        $("#loginItem").show();

    }
    
}

//esta funcion esta aplicada al boton cerrar sesión, que limpia el sessionstorage, y llama a la funcion comprobarsesion() para ocultar los elementos del menu de navegacion que sean necesarios.
function cerrarSesion() {
    sessionStorage.removeItem("usuarioLogueado");
    comprobarSesion();
}

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