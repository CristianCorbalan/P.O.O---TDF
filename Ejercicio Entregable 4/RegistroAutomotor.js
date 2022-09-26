"use strict";
exports.__esModule = true;
exports.RegistroAutomotores = void 0;
var RegistroAutomotores = /** @class */ (function () {
    function RegistroAutomotores(listadoAutos) {
        this.listaVehiculos = listadoAutos;
    }
    RegistroAutomotores.prototype.consultaDeExistenciaDelVehiculo = function (autoParametro) {
        var resultado = false;
        var posicion = -1;
        for (var i = 0; i < this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getPatente() === autoParametro.getPatente()) {
                posicion = i;
                resultado = true;
            }
        }
        console.log(posicion);
        return resultado;
    };
    RegistroAutomotores.prototype.registrarVehiculo = function (autoParametro) {
        this.listaVehiculos.push(autoParametro);
    };
    RegistroAutomotores.prototype.eliminarVehiculo = function (autoParametro) {
        for (var i = 0; i < this.listaVehiculos.length; i++) {
            if (this.listaVehiculos[i].getPatente() === autoParametro.getPatente()) {
                this.listaVehiculos.splice(i, 1);
            }
        }
    };
    RegistroAutomotores.prototype.editarVehiculo = function (posicion, parametroPatente, parametroMarca) {
        this.listaVehiculos[posicion].setPatente(parametroPatente);
        this.listaVehiculos[posicion].setMarca(parametroMarca);
    };
    return RegistroAutomotores;
}());
exports.RegistroAutomotores = RegistroAutomotores;
