function crearPersona(nombre, apellido) {
  /* return {
    nombre: nombre,
    apellido: apellido,
  }; */
  return {
    nombre,
    apellido,
  };
}

const persona = crearPersona("Bruno", "Ramirez");
console.log(persona);

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido }); //indicamos con parentesis que queremos retornar un objeto

const persona2 = crearPersona2("Bruno", "Ramos");
console.log(persona2);

function imprimeArgumentos() {
  console.log(arguments);
}

/* const imprimeArgumentos2 = (...args, noPermiteMasParametros) => {
  console.log(args);
};
 */
const imprimeArgumentos2 = (extraerNombreDeArgs, ...args) => {
  /* console.log({ extraerNombreDeArgs, args }); */
  return args;
};

imprimeArgumentos("Bruno", true, 123, 1.2, { a: 1, b: 2 });

const [casado, celular, altura, saludo] = imprimeArgumentos2(
  "Bruno",
  true,
  123,
  1.2,
  "Hola"
);
console.log({ casado, celular, altura, saludo });

/* const { apellido } = crearPersona("Bruno", "Ramirez"); */

const { apellido: nuevoApellido } = crearPersona("Bruno", "Ramirez");
console.log(nuevoApellido);

//DESTRUCTURACION DE ARGUMENTOS
let tony = {
  nombre: "Tony Stark", //Llave-valor
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

/* const imprimePropiedades = (personaje) => {
  console.log("Nombre", personaje.nombre);
  console.log("Nombre", personaje.codeName);
  console.log("Edad", personaje.edad);
  console.log("Lat", personaje.coords.lat);
  console.log("No. Trajes", personaje.trajes.length);
}; */

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

console.log(imprimePropiedades(tony));
