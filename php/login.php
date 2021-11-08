<?php
$codigo = $_REQUEST["usuario"];
$password = $_REQUEST["password"];

if (isset($_REQUEST["usuario"]) && isset($_REQUEST["password"])) {
    if ($usuario == "root" && $password == "1234") {
        echo "OK" ;
    }else {
        echo "ERROR";
    }
}else{
    echo "MAL";
}

?>