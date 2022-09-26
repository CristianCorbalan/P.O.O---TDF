"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var vehiculo1 = new Auto_1.Auto("Audi", "TT", 2022, "AB123CD");
var vehiculo2 = new Auto_1.Auto("Chevrolet", "Camaro", 2020, "AC456FG");
var vehiculo3 = new Auto_1.Auto("Mercedes-Benz", "Benz Clase GLE", 2021, "AD789HI");
var vehiculo4 = new Auto_1.Auto("Toyota", "Rav4", 2019, "AE012JK");
var arregloVehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4];
var registro_Automotor = new RegistroAutomotor_1.RegistroAutomotores(arregloVehiculos);
var vehiculo5 = new Auto_1.Auto("Ford", "Mustang", 2022, "BA444FB");
var respuestaRecibida = registro_Automotor.consultaDeExistenciaDelVehiculo(vehiculo5);
console.log(respuestaRecibida);
registro_Automotor.registrarVehiculo(vehiculo5);
console.log("RESPUESTA DE CONSULTA");
var respuestaRecibida2 = registro_Automotor.consultaDeExistenciaDelVehiculo(vehiculo5);
console.log(respuestaRecibida2);
console.log("EDITO UN VEHICULO POR ESTAR MAL REGISTRADO");
registro_Automotor.editarVehiculo(2021, "KUGA", "Ford");
console.log(vehiculo5);
registro_Automotor.eliminarVehiculo(vehiculo5);
var respuestaRecibida3 = registro_Automotor.consultaDeExistenciaDelVehiculo(vehiculo5);
console.log(respuestaRecibida3);