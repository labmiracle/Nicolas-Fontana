/*

  Ejercicio 8
    • Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma
    de todos los argumentos

*/

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
  // Usando método de arreglos
  // return numbers.reduce((acc, number) => acc + number)
}

console.log(sum(1, 2, 3, 4, 5));
