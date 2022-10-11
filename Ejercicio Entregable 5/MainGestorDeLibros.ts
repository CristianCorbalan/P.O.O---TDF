import { Libro } from "./Libro";
import { GestorDeLibros } from "./GestorDeLibros";

let libro1 = new Libro ("Cuando no queden más estrellas que contar", "María Martínez", "Novela", 2021, "Cross Books");
let libro2 = new Libro ("Bajo un cielo Blanco"," Elizabeth Kolbert", "Ensayo", 2021, "Crítica");
let libro3 = new Libro ("El amor en los tiempos del cólera", "Gabriel García Márquez", "Novela", 1985, "La Oveja Negra Ltda");
let libro4 = new Libro ("La Divina comedia", "Dante Alighieri", "Epopeya", 1321, "Greenbookseditore");
let libro5 = new Libro ("El lobo estepario", "Herman Hesse", "Novela", 1927, "Negret Books");
let libro6 = new Libro ("El asesinato de Platón", "Marcos Chicot", "Misterio", 2020, "Planeta");
let biblioteca = new GestorDeLibros("Biblioteca: ")
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
biblioteca.agregarLibro(libro4);
biblioteca.agregarLibro(libro5);

console.log(biblioteca.toString());

let arreglo: Array<Libro> = biblioteca.getLibros();
arreglo.push(libro6);

let biblioteca_2 = new GestorDeLibros ("Biblioteca 2: ", arreglo);

console.log(biblioteca_2.toString());