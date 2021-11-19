class restaurante{
    constructor (nombre,ubicacion,tipo,resena,imagen){
        this.nombre = nombre || "Nombre Restaurante";
        this.ubicacion = ubicacion || "Nombre Ubicacion";
        this.tipo = tipo || "Tipo Comida";
        this.resena = resena || "Comentario del Restaurante";
        this.imagen = imagen;

    }

    getResena(){
        console.log("El comentario del restaurante " +nombre+ "es: " +resena);
    }
}
