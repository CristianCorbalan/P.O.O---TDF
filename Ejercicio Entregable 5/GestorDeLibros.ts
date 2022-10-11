import { Libro } from "./Libro";

export class GestorDeLibros {
    private libros = new Array<Libro>
    private nombre: string;

    constructor(nombre:string,libros?:Array<Libro>){
        this.nombre = nombre;
        if(libros != undefined)
        this.libros = libros;
    }

    cantidadDeLibros():number{
        return this.libros.length;
    }

    esVacio():boolean{
        if(this.libros.length == 0 )
        return true;
        return false;
    }

    agregarLibro(libro:Libro){
        this.libros.push(libro);
    }

    obtenerIndice(titulo:string):number{
        let posicion: number = -1;
        for (let i:number = 0; i < this.cantidadDeLibros(); i++){
            if(this.libros[i].getTitulo() == titulo)
            posicion = i;
        }
        return posicion;
    }

    consultarTitulo(titulo:string):boolean{
        if(this.obtenerIndice(titulo) == -1)
        return false;
        return true;
    }

    editarGestor(nombre:string){
        this.nombre = nombre;
    }

    editarLibro(titulo:string){
        if(this.obtenerIndice(titulo) == -1 )
        this.libros[this.obtenerIndice(titulo)].setTitulo(titulo)
    }

    eliminarLibro(titulo:string){
        if(this.obtenerIndice(titulo) == -1 )
        this.libros.splice(this.obtenerIndice(titulo), 1);
    }

    getLibros():Array<Libro>{
        let nuevoArreglo = new Array<Libro>;
        for (let index:number = 0; index < this.cantidadDeLibros(); index++) {
            let titulo = this.libros[index].getTitulo();
            let autor = this.libros[index].getAutor();
            let genero = this.libros[index].getGenero();
            let año = this.libros[index].getAño();
            let editorial = this.libros[index].getEditorial();
            let nuevoLibro = new Libro(titulo,autor,genero,año,editorial);
            nuevoArreglo.push(nuevoLibro);       
          }
        
        return nuevoArreglo;
    }

    toString():string{
            let resultado:string = this.nombre + "\n";
            for (let index:number = 0; index < this.cantidadDeLibros(); index++) {
              resultado += this.libros[index].toString() + '\n\n';
               
            }
            return resultado;
        }
    }


    
