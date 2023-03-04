/* const arr = new Array(10);
console.log(arr);
const arr2 = [];
console.log(arr2);
 */
let videojuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log({ videojuegos });
console.log(videojuegos[0]);
console.log([...videojuegos, "Mario4"]);
let arregloCosas = [
  true,
  123,
  "Fernando",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light"],
];
//console.log({ arregloCosas });
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7]);

let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Largo: ", juegos.length);
let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo });
juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr }); //Esta instruccion se ejecuta para cada elemento de mi arreglo
});
//Con push ingresa al final del arreglo
let nuevoLargo = juegos.push("F-Zero");
console.log({ nuevoLargo, juegos });
//con unshift ingresa al princip del arreglo
juegos.unshift("Fire Emblem");
console.log({ nuevoLargo, juegos });
let juegoBorrado = juegos.pop(); //Elimina el ultimo elemento
console.log({ juegoBorrado, juegos });
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2); //Elimina desde la posicion indicada hasta la cantidad que le pases en adelante. Devuelve un arreglo con los elementos borrados
console.log({ juegosBorrados, juegos });
//Encontrar la posicion de un elemento en caso de no encontrarlo devuelve -1
let metroIndex = juegos.indexOf("Metroid");
console.log(metroIndex);
