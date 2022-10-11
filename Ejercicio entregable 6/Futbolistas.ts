import { Seleccion } from "./Seleccion";

export class Futbolistas extends Seleccion{
private edad: number;
private equipo: string;
private posicion: string;
private paisDeOrigen: string;

constructor(numeroDePasaporte: number, fechaDeNacimiento: string, apellido: string, nombre: string, edad: number, equipo: string, posicion: string, paisDeOrigen: string ){
super(nombre, apellido, fechaDeNacimiento, numeroDePasaporte)
this.edad = edad;
this.equipo = equipo;
this.posicion = posicion;
this.paisDeOrigen = paisDeOrigen;
}

getEdad():number{
    return this.edad;
}

getEquipo():string{
    return this.equipo;
}

getPosicion():string{
    return this.posicion;
}

getPaisDeOrigen():string{
    return this.paisDeOrigen;
}

setEdad(paramEdad: number):void{
    this.edad = paramEdad;
}

setEquipo(paramEquipo: string):void{
    this.equipo = paramEquipo;
}

setPosicion(paramPosicion: string):void{
    this.posicion = paramPosicion;
}

setPaisDeOrigen(paramPaisDeOrigen: string):void{
    this.paisDeOrigen = paramPaisDeOrigen;
}

toString():string{
    return "Nombre: " + this.getNombre() + '\n' + "Apellido: " + this.getApellido() + '\n' + "Fecha de Nacimiento: " + this.getFechaDeNacimiento() + '\n' + "Numero de Pasaporte: " + this.getNumeroDePasaporte() + '\n' + "Edad: " + this.getEdad() + '\n' + "Equipo: " + this.getEquipo() + '\n' + "Posicion: " + this.getPosicion() + '\n' + "Pais de Origen: " + this.getPaisDeOrigen() + '\n';
}

}

