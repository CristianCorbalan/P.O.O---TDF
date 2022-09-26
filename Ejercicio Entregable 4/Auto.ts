export class Auto{

        private marca: string;
        private modelo: string;
        private anio: number;
        private patente: string;

constructor(parametroMarca: string, parametroModelo: string, parametroAnio: number, parametroPatente: string){
        this.marca = parametroMarca;
        this.modelo = parametroModelo;
        this.anio = parametroAnio;
        this.patente = parametroPatente;

    }

    public setMarca(marcaParam: string): void{
        this.marca = marcaParam;
    }

    public getMarca(): string{
        return this.marca;
    }

    public setModelo(modeloParam: string): void{
        this.modelo = modeloParam;
    }

    public getModelo(): string{
        return this.modelo;
    }

    public setAnio(anioParam: number): void{
        this.anio = anioParam;
    }

    public getAnio(): number{
        return this.anio;
    }

    public setPatente(patenteParam: string): void{
        this.patente = patenteParam;
    }

    public getPatente(): string{
        return this.patente;
    }
}

