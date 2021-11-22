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

const admin1 = new usuario(
    (nombre = "admin web"),
    (email = "admin@tgt.com"),
    (user = "admin"),
    (pass = "admin")
);

const admin2 = new usuario(
    (nombre = "Kelvin Guerrero"),
    (email = "kelvin@tgt.com"),
    (user = "kelvin"),
    (pass = "admin")
);

const admin3 = new usuario(
    (nombre = "Miguel Mite"),
    (email = "miguel@tgt.com"),
    (user = "miguel"),
    (pass = "admin")
);