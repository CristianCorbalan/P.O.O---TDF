"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var Seleccion_1 = require("./Seleccion");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, fechaDeNacimiento, numeroDePasaporte, federacion) {
        return _super.call(this, nombre, apellido, fechaDeNacimiento, numeroDePasaporte) || this;
    }
    Entrenador.prototype.getFederacion = function () {
        return this.federacion;
    };
    Entrenador.prototype.setFederacion = function (paramFederacion) {
        this.federacion = paramFederacion;
    };
    Entrenador.prototype.toString = function () {
        return "Nombre: " + this.getNombre() + '\n' + "Apellido: " + this.getApellido() + '\n' + "Fecha de Nacimiento: " + this.getFechaDeNacimiento() + '\n' + "Numero de Pasaporte: " + this.getNumeroDePasaporte() + '\n' + "Federacion: " + this.getFederacion() + '\n';
    };
    return Entrenador;
}(Seleccion_1.Seleccion));
exports.Entrenador = Entrenador;
