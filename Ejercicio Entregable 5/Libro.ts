export class Libro{
    private titulo: string;
    private autor: string;
    private genero: string;
    private año: number;
    private editorial: string;

    constructor(titulo:string, autor:string, genero:string, año:number, editorial:string){
    
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.año = año; 
        this.editorial = editorial;

    }

    getTitulo():string{
        return this.titulo;
    }

    getAutor():string{
        return this.autor;
    }

    getGenero():string{
        return this.genero;
    }

    getAño():number{
        return this.año;
    }

    getEditorial():string{
        return this.editorial;
    }

    setTitulo(paramTitulo:string):void{
        this.titulo = paramTitulo;
    }

    setAutor(paramAutor:string):void{
        this.autor = paramAutor;
    }

    setGenero(paramGenero:string):void{
        this.genero = paramGenero;
    }

    setAño(paramAño:number):void{
        this.año = paramAño;
    }

    setEditorial(paramEditorial:string):void{
        this.editorial = paramEditorial;
    }

    toString():string{
        return "Titulo: " + this.getTitulo() + '\n' + "Autor: " + this.getAutor() + '\n' + "Genero: " + this.getGenero() + '\n' + "Editorial: " + this.getEditorial() + '\n' + "Año: " + this.getAño(); 
    }

}
