import { ESTADO } from "./estado";

export class Contacto {

    nombre = '';
    apellido = '';
    email = '';
    estaEnLinea = ESTADO.DESCONECTADO;

    constructor(nombre, apellido, email, estaEnLinea) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estaEnLinea = estaEnLinea;
    }
}