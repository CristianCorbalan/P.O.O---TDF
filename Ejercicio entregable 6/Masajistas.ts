import { Seleccion } from "./Seleccion";

export class Masajista extends Seleccion{
    private titulo: string;
    private matricula: number;

    constructor(nombre:string, apellido:string, fechaDeNacimiento:string, numeroDePasaporte:number, titulo:string, matricula:number){
        super(nombre, apellido, fechaDeNacimiento, numeroDePasaporte);
        this.titulo = titulo;
        this.matricula = matricula;
    }

    getTitulo():string{
        return this.titulo;
    }

    getMatricula():number{
        return this.matricula;
    }

    setTitulo(paramTitulo:string):void{
        this.titulo = paramTitulo;
    }

    setMatricula(paramMatricula:number):void{
        this.matricula = paramMatricula;
    }

    toString():string{
        return "Nombre: " + this.getNombre() + '\n' + "Apellido: " + this.getApellido() + '\n' + "Fecha de Nacimiento: " + this.getFechaDeNacimiento() + '\n' + "Numero de Pasaporte: " + this.getNumeroDePasaporte() + '\n' + "Titulo: " + this.getTitulo() + '\n' + "Numero de Matricula: " + this.getMatricula() + '\n';
    }
}