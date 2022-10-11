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
exports.Masajista = void 0;
var Seleccion_1 = require("./Seleccion");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, apellido, fechaDeNacimiento, numeroDePasaporte, titulo, matricula) {
        var _this = _super.call(this, nombre, apellido, fechaDeNacimiento, numeroDePasaporte) || this;
        _this.titulo = titulo;
        _this.matricula = matricula;
        return _this;
    }
    Masajista.prototype.getTitulo = function () {
        return this.titulo;
    };
    Masajista.prototype.getMatricula = function () {
        return this.matricula;
    };
    Masajista.prototype.setTitulo = function (paramTitulo) {
        this.titulo = paramTitulo;
    };
    Masajista.prototype.setMatricula = function (paramMatricula) {
        this.matricula = paramMatricula;
    };
    Masajista.prototype.toString = function () {
        return "Nombre: " + this.getNombre() + '\n' + "Apellido: " + this.getApellido() + '\n' + "Fecha de Nacimiento: " + this.getFechaDeNacimiento() + '\n' + "Numero de Pasaporte: " + this.getNumeroDePasaporte() + '\n' + "Titulo: " + this.getTitulo() + '\n' + "Numero de Matricula: " + this.getMatricula() + '\n';
    };
    return Masajista;
}(Seleccion_1.Seleccion));
exports.Masajista = Masajista;
