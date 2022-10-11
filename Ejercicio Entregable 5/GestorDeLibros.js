"use strict";
exports.__esModule = true;
exports.GestorDeLibros = void 0;
var Libro_1 = require("./Libro");
var GestorDeLibros = /** @class */ (function () {
    function GestorDeLibros(nombre, libros) {
        this.libros = new Array;
        this.nombre = nombre;
        if (libros != undefined)
            this.libros = libros;
    }
    GestorDeLibros.prototype.cantidadDeLibros = function () {
        return this.libros.length;
    };
    GestorDeLibros.prototype.esVacio = function () {
        if (this.libros.length == 0)
            return true;
        return false;
    };
    GestorDeLibros.prototype.agregarLibro = function (libro) {
        this.libros.push(libro);
    };
    GestorDeLibros.prototype.obtenerIndice = function (titulo) {
        var posicion = -1;
        for (var i = 0; i < this.cantidadDeLibros(); i++) {
            if (this.libros[i].getTitulo() == titulo)
                posicion = i;
        }
        return posicion;
    };
    GestorDeLibros.prototype.consultarTitulo = function (titulo) {
        if (this.obtenerIndice(titulo) == -1)
            return false;
        return true;
    };
    GestorDeLibros.prototype.editarGestor = function (nombre) {
        this.nombre = nombre;
    };
    GestorDeLibros.prototype.editarLibro = function (titulo) {
        if (this.obtenerIndice(titulo) == -1)
            this.libros[this.obtenerIndice(titulo)].setTitulo(titulo);
    };
    GestorDeLibros.prototype.eliminarLibro = function (titulo) {
        if (this.obtenerIndice(titulo) == -1)
            this.libros.splice(this.obtenerIndice(titulo), 1);
    };
    GestorDeLibros.prototype.getLibros = function () {
        var nuevoArreglo = new Array;
        for (var index = 0; index < this.cantidadDeLibros(); index++) {
            var titulo = this.libros[index].getTitulo();
            var autor = this.libros[index].getAutor();
            var genero = this.libros[index].getGenero();
            var año = this.libros[index].getAño();
            var editorial = this.libros[index].getEditorial();
            var nuevoLibro = new Libro_1.Libro(titulo, autor, genero, año, editorial);
            nuevoArreglo.push(nuevoLibro);
        }
        return nuevoArreglo;
    };
    GestorDeLibros.prototype.toString = function () {
        var resultado = this.nombre + "\n";
        for (var index = 0; index < this.cantidadDeLibros(); index++) {
            resultado += this.libros[index].toString() + '\n\n';
        }
        return resultado;
    };
    return GestorDeLibros;
}());
exports.GestorDeLibros = GestorDeLibros;
