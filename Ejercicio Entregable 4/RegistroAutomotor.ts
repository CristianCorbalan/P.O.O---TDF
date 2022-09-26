import { Auto } from './Auto'

export class RegistroAutomotores{
    
    public listaVehiculos: Auto[];

    constructor(listadoAutos: Auto[]){
        this.listaVehiculos = listadoAutos;

    }

    consultaDeExistenciaDelVehiculo(autoParametro: Auto):boolean{
        let resultado : boolean = false;
        let posicion = -1;
        for (let i:number = 0;i < this.listaVehiculos.length;i++){
            if(this.listaVehiculos[i].getPatente() === autoParametro.getPatente()){
                posicion = i;
                resultado = true;
        }
    }
    console.log(posicion);
    return resultado;
}

registrarVehiculo(autoParametro: Auto): void{
    this.listaVehiculos.push(autoParametro);
}

eliminarVehiculo(autoParametro: Auto):void{
    for(let i:number = 0;i<this.listaVehiculos.length;i++){
        if(this.listaVehiculos[i].getPatente() === autoParametro.getPatente()){
            this.listaVehiculos.splice(i,1);
        }
    }
}

editarVehiculo(posicion:number,parametroPatente:string,parametroMarca:string):void{
    this.listaVehiculos[posicion].setPatente(parametroPatente);
    this.listaVehiculos[posicion].setMarca(parametroMarca);
}

}