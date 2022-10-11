"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(nombre, apellido, fechaDeNacimiento, numeroDePasaporte) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.numeroDePasaporte = numeroDePasaporte;
    }
    Seleccion.prototype.getNombre = function () {
        return this.nombre;
    };
    Seleccion.prototype.getApellido = function () {
        return this.apellido;
    };
    Seleccion.prototype.getFechaDeNacimiento = function () {
        var fecha = new Date(this.fechaDeNacimiento);
        return fecha;
    };
    Seleccion.prototype.getNumeroDePasaporte = function () {
        return this.numeroDePasaporte;
    };
    Seleccion.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Seleccion.prototype.setApellido = function (paramApellido) {
        this.apellido = paramApellido;
    };
    Seleccion.prototype.setFechaDeNacimiento = function (paramFechaNacimiento) {
        this.fechaDeNacimiento = paramFechaNacimiento;
    };
    Seleccion.prototype.setNumeroDePasaporte = function (paramNumPasaporte) {
        this.numeroDePasaporte = paramNumPasaporte;
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
