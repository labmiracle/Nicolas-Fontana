/*

  Ejercicio 9
    • Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argumentos (incluidos números o cadenas) y devuelva la suma de solo los números

*/

function addOnlyNums(...args) {
  const validation = args.every((arg) => typeof arg === "number" || typeof arg === "string");
  if (!validation) {
    return "Data must be string or number";
  }

  let acc = 0;
  for (const arg of args) {
    if (typeof arg === "number") {
      acc += arg;
    }
  }
  return acc;

  /*

    Usando métodos de arreglos

    const numbers = args.filter(arg => typeof arg === 'number' )
    return numbers.reduce((acc, number) => acc + number)

  */
}

console.log(addOnlyNums("hola", 2, 3));
