"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, genero, año, editorial) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.año = año;
        this.editorial = editorial;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.getAño = function () {
        return this.año;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setTitulo = function (paramTitulo) {
        this.titulo = paramTitulo;
    };
    Libro.prototype.setAutor = function (paramAutor) {
        this.autor = paramAutor;
    };
    Libro.prototype.setGenero = function (paramGenero) {
        this.genero = paramGenero;
    };
    Libro.prototype.setAño = function (paramAño) {
        this.año = paramAño;
    };
    Libro.prototype.setEditorial = function (paramEditorial) {
        this.editorial = paramEditorial;
    };
    Libro.prototype.toString = function () {
        return "Titulo: " + this.getTitulo() + '\n' + "Autor: " + this.getAutor() + '\n' + "Genero: " + this.getGenero() + '\n' + "Editorial: " + this.getEditorial() + '\n' + "Año: " + this.getAño();
    };
    return Libro;
}());
exports.Libro = Libro;
