class AireAcondicionado{
    //estado

    estaPrendido: boolean;
    temperaturaActual: number;
    estaFrio: boolean;
    marca: string;

 //funcionalidades
    constructor( TemperaturaActual: number, estaFrio: boolean, marca:string, estaPrendido:boolean ){
        
        this.temperaturaActual = TemperaturaActual;
        this.estaFrio = estaFrio;
        this.marca = marca;
        this.estaPrendido = estaPrendido;
    }

    prenderApagar(): void{
        if(this.estaPrendido)
        this.estaPrendido = false
        else 
        this.estaPrendido = true
    }
   
}

let aireAcondicionado = new AireAcondicionado(25, true, "samsung", false);

console.log(aireAcondicionado);