class Telefono{
    private estaPrendido: boolean;
    private bateriaActual: number;

     constructor(paramPrendido:boolean, paramBateria:number){
        this.estaPrendido = paramPrendido;
        this.bateriaActual = paramBateria;
    }

    public setEstado(estadoParam:boolean):void{
        this.estaPrendido = estadoParam;
    }

    public getEstado():boolean{
       return this.estaPrendido;
    }

    public setBateria(bateriaParam:number):void{
        this.bateriaActual = bateriaParam;
    }

    public getBateria():number{
        return this.bateriaActual;
    }
    
}
