//PASO POR VALOR
//TODO: En JS todos los tipos primitivos son pasados por valor
let a = 10;
let b = a;
a = 30;
console.log(a, b);

//PASO POR REFERENCIA
//TODO: En JS todos los objetos son pasados por referencia
let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "Pedro";
console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);

console.log(peter, tony);
/*
  TODO: REST: Acepta un número variable de argumentos y los agrupa en un array llamado numeros.
 *function sumar(...numeros) {
 * let resultado = 0;
 * for (let numero of numeros) {
 *   resultado += numero;
 * }
 * return resultado;
*}


TODO: SPREAD: Rompe la referencia. Se utiliza para expandir los elementos de un array o un objeto en otro array o objeto. En este ejemplo, el operador spread se utiliza para crear un nuevo array numeros3 que contiene los elementos de los arrays numeros1 y numeros2, junto con los números 7, 8 y 9.
*sumar(1, 2, 3, 4); // retorna 10
* let numeros1 = [1, 2, 3];
* let numeros2 = [4, 5, 6];
* let numeros3 = [...numeros1, ...      numeros2, 7, 8, 9];

* console.log(numeros3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const frutas = ["Manzana", "Pera", "Piña"];
//const otrasFrutas = frutas;
//const otrasFrutas = [...frutas];
console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("spread");
otrasFrutas.push("Uva");
console.table({ frutas, otrasFrutas });
