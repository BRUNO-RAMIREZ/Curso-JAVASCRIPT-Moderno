let personaje = {
  nombre: "Tony Stark", //Llave-valor
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};
console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("Edad", personaje["edad"]);
console.log("Lat", personaje.coords.lat);
console.log("No. Trajes", personaje.trajes.length);
console.log("No. Trajes", personaje.trajes[personaje.trajes.length - 1]);
const x = "vivo";
console.log("Vivo", personaje[x]);
console.log("Ultima Pelicula", personaje["ultima-pelicula"]);
/* console.log("Ultima Pelicula", personaje.ultima-pelicula); NO PERMITIDO*/

//BORRAR PROPIEDADES DE UN OBJETO LITERAL
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares); //Devuelve un arreglo con los pares de llave-valor

Object.freeze(personaje); //No permite que sigas añadiendiendo propiedades al objeto o que las cambies
personaje.dinero = 1000000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica"; //valido
console.log(personaje);

//Obtener las propiedades de un objeto
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);
//Obtener los valores de un objeto
const valores = Object.values(personaje);
console.log(valores);
