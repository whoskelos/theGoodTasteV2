onload = function() {
    document.getElementById('btnAcceder').addEventListener('click',comprobarUsuario);
}

function comprobarUsuario() {
    let cajaUsuario = document.getElementById("usuario");
    let password = document.getElementById("password");

    $.get("script.php",
    {"usuario":cajaUsuario.value,"password":password.value},
    (resultado) => {
        if (resultado == "OK") {
            location.href = "index.html";
        }else{
            alert("usuario y/o contraseña incorrecta") ;
        }
    })
}