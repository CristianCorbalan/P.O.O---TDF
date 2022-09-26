"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(parametroMarca, parametroModelo, parametroAnio, parametroPatente) {
        this.marca = parametroMarca;
        this.modelo = parametroModelo;
        this.anio = parametroAnio;
        this.patente = parametroPatente;
    }
    Auto.prototype.setMarca = function (marcaParam) {
        this.marca = marcaParam;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setModelo = function (modeloParam) {
        this.modelo = modeloParam;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setAnio = function (anioParam) {
        this.anio = anioParam;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.setPatente = function (patenteParam) {
        this.patente = patenteParam;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
exports.Auto = Auto;
