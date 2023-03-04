//No recomendado de esta manera porque permitiria hacer esto: var saludar = 123;
function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Bruno");

//Solo valido para functions tradicionales
function saludar1(nombre) {
  console.log(arguments);
  console.log("Hola " + nombre);
}
saludar1("Juan", 40, true, []);

//Funcion ANONIMA
const saludar2 = function (nombre) {
  console.log("Hola-" + nombre);
};

saludar2("Juan");

//Funcion Flecha
const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre);
};

saludarFlecha("Juancho");

//SI NO TIENEN RETURN IMPLICITAMENTE DEVUELVEN UN UNDEFINED
const retornoDeFuncion = () => {
  return [1, 2, 3];
};

const _retornoDeFuncion = retornoDeFuncion();
console.log({ _retornoDeFuncion });

const retornoDeFuncion2 = () => [1, 2, 3];
console.log(retornoDeFuncion2());

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());
