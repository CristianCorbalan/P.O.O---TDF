import { Seleccion } from "./Seleccion";

export class Entrenador extends Seleccion{
private federacion: string;

constructor(nombre: string, apellido:  string, fechaDeNacimiento: string, numeroDePasaporte: number, federacion:string){
 super(nombre, apellido, fechaDeNacimiento, numeroDePasaporte);
}

getFederacion():string{
    return this.federacion;
}

setFederacion(paramFederacion:string):void{
    this.federacion = paramFederacion;
}

toString(){
    return "Nombre: " + this.getNombre() + '\n' + "Apellido: " + this.getApellido() + '\n' + "Fecha de Nacimiento: " + this.getFechaDeNacimiento() + '\n' + "Numero de Pasaporte: " + this.getNumeroDePasaporte() + '\n' + "Federacion: " + this.getFederacion() + '\n';
}

}