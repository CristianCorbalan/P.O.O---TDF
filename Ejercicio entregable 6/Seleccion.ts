 export class Seleccion {
    private nombre: string;
    private apellido: string;
    private fechaDeNacimiento: string;
    private numeroDePasaporte: number;
    
    public constructor(nombre:string, apellido:string, fechaDeNacimiento: string, numeroDePasaporte:number){
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaDeNacimiento = fechaDeNacimiento;
      this.numeroDePasaporte = numeroDePasaporte;
    }
    
    getNombre():string {
    return this.nombre;
    }
    
    getApellido():string{
    return this.apellido;
    }
    
    getFechaDeNacimiento(){
      let fecha = new Date(this.fechaDeNacimiento);
      return fecha;
    }

    getNumeroDePasaporte():number{
    return this.numeroDePasaporte;    
    }
    
    setNombre(paramNombre:string):void{
    this.nombre = paramNombre;
    }

    setApellido(paramApellido:string):void{
      this.apellido = paramApellido;
    }

    setFechaDeNacimiento(paramFechaNacimiento: string){
      this.fechaDeNacimiento = paramFechaNacimiento;
     }

    setNumeroDePasaporte(paramNumPasaporte:number){
      this.numeroDePasaporte = paramNumPasaporte;
     }
    
}