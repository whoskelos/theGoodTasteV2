onload = function () {
    let nombreCompleto = document.getElementById("nombreCompleto");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("floatingTextarea");
    $("#btnEnviar").click(function () { 
        if (nombreCompleto.value != "" && email.value != "" && mensaje.value != "" ) {
            alert("Hemos recibido tu mensaje, nos pondremos en contacto contigo.");
        }else {
            alert("Porfavor rellene todo los campos");
        }
    });
}