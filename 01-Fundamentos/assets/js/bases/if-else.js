let a = 5;
if (a < 10) {
  console.log("A es menor a 10");
} else {
  console.log("A es mayor a 10");
}
console.log("Fin del programa");
const hoy = new Date();
console.log(hoy);
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves, 5: Viernes, 6: Sabado
console.log({ dia });
if (dia === 0) {
  console.log("Domingo");
} else {
  console.log("No es domingo");
}

const diaLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

const diaLetras2 = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
dia = 3;
console.log(diaLetras[dia] || "Dia no valido");

console.log(diaLetras2[dia - 1] || "Dia no valido");
