const carros = ["Ford", "Mazda", "Honda", "Toyota"];
let i = 0;
/* while (i < carros.length) {
  console.log(carros[i++]);
} */
/*
  Valores Falsos
  undefined
  null
  false
*/

while (carros[i]) {
  if (i === 1) {
    //break;
    i++;
    continue;
  }
  console.log(carros[i++]);
}

console.warn("Do While");
let j = 0;
do {
  console.log(carros[j++]);
} while (carros[j]);
