/*
  Ejercicio 2
    • Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos del arreglo arr

    function sum(arr, n) { }
*/

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1];
}

const result = sum([2, 1, 3, 5], 3);

console.log(result);
