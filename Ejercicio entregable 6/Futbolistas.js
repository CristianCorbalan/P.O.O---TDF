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
exports.Futbolistas = void 0;
var Seleccion_1 = require("./Seleccion");
var Futbolistas = /** @class */ (function (_super) {
    __extends(Futbolistas, _super);
    function Futbolistas(numeroDePasaporte, fechaDeNacimiento, apellido, nombre, edad, equipo, posicion, paisDeOrigen) {
        var _this = _super.call(this, nombre, apellido, fechaDeNacimiento, numeroDePasaporte) || this;
        _this.edad = edad;
        _this.equipo = equipo;
        _this.posicion = posicion;
        _this.paisDeOrigen = paisDeOrigen;
        return _this;
    }
    Futbolistas.prototype.getEdad = function () {
        return this.edad;
    };
    Futbolistas.prototype.getEquipo = function () {
        return this.equipo;
    };
    Futbolistas.prototype.getPosicion = function () {
        return this.posicion;
    };
    Futbolistas.prototype.getPaisDeOrigen = function () {
        return this.paisDeOrigen;
    };
    Futbolistas.prototype.setEdad = function (paramEdad) {
        this.edad = paramEdad;
    };
    Futbolistas.prototype.setEquipo = function (paramEquipo) {
        this.equipo = paramEquipo;
    };
    Futbolistas.prototype.setPosicion = function (paramPosicion) {
        this.posicion = paramPosicion;
    };
    Futbolistas.prototype.setPaisDeOrigen = function (paramPaisDeOrigen) {
        this.paisDeOrigen = paramPaisDeOrigen;
    };
    Futbolistas.prototype.toString = function () {
        return "Nombre: " + this.getNombre() + '\n' + "Apellido: " + this.getApellido() + '\n' + "Fecha de Nacimiento: " + this.getFechaDeNacimiento() + '\n' + "Numero de Pasaporte: " + this.getNumeroDePasaporte() + '\n' + "Edad: " + this.getEdad() + '\n' + "Equipo: " + this.getEquipo() + '\n' + "Posicion: " + this.getPosicion() + '\n' + "Pais de Origen: " + this.getPaisDeOrigen() + '\n';
    };
    return Futbolistas;
}(Seleccion_1.Seleccion));
exports.Futbolistas = Futbolistas;
