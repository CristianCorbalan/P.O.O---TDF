class Televisor{
    private volumenActual: number;
    private canalActual: number;
    private estaPrendido: boolean;

    public constructor(){
        this.volumenActual = 0;
        this.canalActual= 0;
        this.estaPrendido= true;

    }


}

class SmartTv extends Televisor{
    private navegarPorInternet: boolean;
    private cantAplicaciones: number;

    constructor(){
        super()
        this.navegarPorInternet= false;
        this.cantAplicaciones= 5;
    }
}
