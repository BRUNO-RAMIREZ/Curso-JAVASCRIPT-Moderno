//Varibale .- Es un contenedor de información que apunta a un lugar de la memoria. Dicha informacion puede cambiar en el futuro.
//Polyfill.-Es un codigo que provee el funcionamiento de una nueva caracteristica de Javascript ES6 en versiones viejas como ES5
//Usar const en ves de let.- Cuando se sabe que la variable no cambiaran de valor porque las mismas no tienen propiedades que permitan hacer cambios en su valor, es por ello que las hacen mas ligeras en cuestion de perfomance.
//alert("Hola Mundo desde js");
let a = 10,
  b = 20,
  c = "Hola ",
  d = "Spiderman",
  x = a + b;

const saludo = c + d;
//En javascript esta nomenclatura de SALUDO se usa cuando sean constantes de entorno es decir el uso sera en todo el proyecto.
//console.log(`%c ${x}`, "color:blue; font-size: 20px;");
//console.log(x);
//console.info(x);
//console.warn(x);
//console.error(x);
//console.table({ a, b, c, d, x });
var miNombre = "Bruno";
//Con var coloca esa variable en el scope global, es decir ya le pertenece al objeto window.
//Con var podemos sobreesribir algunas propiedades de windows
var outerWidth = 100000;
var outerHeight = 1000;
