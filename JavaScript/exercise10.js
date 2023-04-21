/*

  Ejercicio 10
    • Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
    y devuelva un solo arreglo que combine ambos (usando el operador ...)

*/

function combineTwoArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Data must be array";
  }
  return [...arr1, ...arr2];
}

console.log(combineTwoArrays([1, 2, 3], ["a", "b", "c"]));
