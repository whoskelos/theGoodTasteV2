class usuario{
    constructor (dni,nombre,apellidos,edad,ciudad){
        this.dni = dni || "00000000X";
        this.nombre = nombre || "sin nombre";
        this.apellidos = apellidos || "sin apellido";
        this.edad = edad || "sin edad";
        this.ciudad = ciudad || "sin ciudad";
    }

    getEdad(){
        console.log("la edad del usuario " +nombre+  " es " + edad);
    }
}
