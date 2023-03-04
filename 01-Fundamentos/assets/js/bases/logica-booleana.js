const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negacion");
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true

console.warn("And"); //true si todos los valores son true
console.log(true && true); //true
console.log(true && false); //false

console.log("==================");
console.log(regresaFalse() && regresaTrue()); //false - solo se ejecuta la primera funcion como es false, no se ejecuta la segunda y devuelve el console.log de la primera funcion

console.warn("OR"); //true si al menos un valor es true
console.log(true || false); //true
console.log(false || false); //false
console.log(regresaTrue() || regresaFalse()); //true - solo se ejecuta la primera funcion como es true, no se ejecuta la segunda y devuelve el console.log de la primera funcion

console.log("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150; // 150
const a2 = "Hola" && "Mundo"; // Mundo
const a3 = "Hola" && "Mundo" && soyFalso; // false
const a4 = soyFalso || "Ya no soy falso"; // Ya no soy falso
const a5 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true; // Ya no soy falso de nuevo
const a6 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "Ya no soy falso de nuevo" ||
  true; // true
console.log({ a1, a2, a3, a4, a5, a6 });
