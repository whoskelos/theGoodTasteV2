/**En este documento sanearemos los datos introducidos por los usuarios en los input */

function sanear() {
    let emailUsuario = document.getElementById("emailNuevo").value.trim().toLowerCase();
    let nombreUsuario = document.getElementById("usuarioNuevo").value.trim().toLowerCase();
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");
    
    comprobarErrores(nombreUsuario,emailUsuario,pass1,pass2);
}

function comprobarErrores(email,usuario,p1,p2) {
    let error = false;
    let patronEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (patronEmail.test(email)){
    $("#emailNuevo").css("color", "#62d34c"); //si esta bien ponemos color verde el texto
    }else{
        $("#emailNuevo").css("color", "#e53a3a"); //si esta mal ponemos color rojo el texto
        error = true;
    }
}