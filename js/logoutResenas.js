onload = function () {
    comprobarSesion();
    console.log("funciona");
}

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
function cerrarSesion() {
    sessionStorage.removeItem("usuarioLogueado");
    location.href = "../index.html";
}