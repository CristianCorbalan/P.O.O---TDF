import { Auto } from './Auto'
import { RegistroAutomotores } from './RegistroAutomotor'

let vehiculo1: Auto = new Auto("Audi", "TT", 2022, "AB123CD");
let vehiculo2: Auto = new Auto("Chevrolet", "Camaro", 2020, "AC456FG");
let vehiculo3: Auto = new Auto("Mercedes-Benz", "Benz Clase GLE", 2021, "AD789HI");
let vehiculo4: Auto = new Auto("Toyota", "Rav4", 2019, "AE012JK");

let arregloVehiculos: Auto[] = [vehiculo1, vehiculo2, vehiculo3, vehiculo4];

let registro_Automotor: RegistroAutomotores = new RegistroAutomotores(arregloVehiculos);

let vehiculo5:Auto = new Auto("Ford", "Mustang", 2022, "BA444FB");


let respuestaRecibida:boolean = registro_Automotor.consultaDeExistenciaDelVehiculo(vehiculo5);
console.log(respuestaRecibida);


registro_Automotor.registrarVehiculo(vehiculo5);


console.log("RESPUESTA DE CONSULTA");
let respuestaRecibida2:boolean = registro_Automotor.consultaDeExistenciaDelVehiculo(vehiculo5);
console.log(respuestaRecibida2);

console.log("EDITO UN VEHICULO POR ESTAR MAL REGISTRADO");
registro_Automotor.editarVehiculo(2021,"KUGA", "Ford");
console.log(vehiculo5);



registro_Automotor.eliminarVehiculo(vehiculo5);



let respuestaRecibida3:boolean = registro_Automotor.consultaDeExistenciaDelVehiculo(vehiculo5);
console.log(respuestaRecibida3);