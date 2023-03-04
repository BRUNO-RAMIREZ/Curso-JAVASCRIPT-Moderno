//PRIMITIVOS.- Es una informacion que no es un objeto y son inmutables
/*
  Boolean - true / false :: Verdadero y falso
  Null - Sin valor en lo absoluto
  Undefined - Una variable declarada que aun no se le asigna un valor
  Number - integer, float, etc.
  String - Cadena de caracteres
  Symbol - Un valor unico que no es igual a ningun otro
*/
let nombre = "Peter Parker";
console.log(nombre);
nombre = "Ben Parker";
nombre = "Tia May";
console.log(typeof nombre);
nombre = 123;
console.log(typeof nombre);
let esMarvel = true;
console.log(typeof esMarvel);
let edad = 33.001;
console.log(typeof edad); //Number, no existen floats, etc
let superPoder;
console.log(typeof superPoder); //Undefined
let soyNull = null;
console.log(typeof soyNull); //Object
let symbol1 = Symbol("a");
let symbol2 = Symbol("a");
console.log(typeof symbol1);
console.log(symbol1 === symbol2);
