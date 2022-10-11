import { Futbolistas } from "./Futbolistas";
import { Entrenador } from "./Entrenador";
import { Masajista } from "./Masajistas";

let seleccionArgentina1 = new Futbolistas (8154, "02-Septiembre-1992", "Martinez Romero", "Damian Emiliano", 30, "Argentina", "Arquero", "Argentina" );
let seleccionArgentina2 = new Futbolistas (3120, "13-Agosto-1994", "Correa", "Carlos Joaquín", 28, "Argentina", "Delantero", "Argentina");
let seleccionArgentina3 = new Futbolistas (2339, "12-Febrero-1988", "Otamendi", "Nicolás Hernán Gonzalo", 34, "Argentina", "Defensor", "Argentina");

let seleccionArgEntrenador = new Entrenador ("Lionel Sebastián", "Scaloni", "16-Mayo-1978", 1381, "AFA");

let seleccionArgMasajista = new Masajista ("Marcelo", "DAndrea", "20-Enero-1956", 1483, "Fisioterapeuta", 303826);

console.log(seleccionArgentina1);
console.log(seleccionArgentina2.getPosicion());
console.log(seleccionArgentina3.getFechaDeNacimiento());
console.log(seleccionArgEntrenador);
console.log(seleccionArgMasajista.getMatricula());
