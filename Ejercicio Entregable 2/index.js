var AireAcondicionado = /** @class */ (function () {
    //funcionalidades
    function AireAcondicionado(TemperaturaActual, estaFrio, marca, estaPrendido) {
        this.temperaturaActual = TemperaturaActual;
        this.estaFrio = estaFrio;
        this.marca = marca;
        this.estaPrendido = estaPrendido;
    }
    AireAcondicionado.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    return AireAcondicionado;
}());
var aireAcondicionado = new AireAcondicionado(25, true, "samsung", false);
console.log(aireAcondicionado);
