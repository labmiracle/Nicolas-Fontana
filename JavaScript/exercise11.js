/*

  Ejercicio 11
    • Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos
    y devuelva un arreglo de solo los argumentos únicos

*/

function onlyUniques(...args) {
  let uniqueArgs = [];

  for (let i = 0; i < args.length; i++) {
    let isUnique = true;
    for (let j = 0; j < args.length; j++) {
      if (i !== j && args[i] === args[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueArgs.push(args[i]);
    }
  }

  return uniqueArgs;
}

console.log(onlyUniques(0, "0", "2", [1, 2, 3], [1, 2, 3], { a: 1, b: 2 }, "2", 2, { a: 1, b: 2 }));
