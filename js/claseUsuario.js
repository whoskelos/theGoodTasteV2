class usuario {
    constructor(nombre, email, user, pass) {
        this.nombre = nombre || "sin nombre";
        this.email = email || "email";
        this.user = user || "sin nombre usuario";
        this.pass = pass || "sin contrasena";
    }

    getEdad() {
        console.log("la edad del usuario " + nombre + " es " + edad);
    }
}