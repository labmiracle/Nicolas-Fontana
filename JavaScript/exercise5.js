/*

  Ejercicio 5
    • Crea una función que reciba una cadena y la devuelva en camelCase

    function camelize(str) {
    }
    console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');

*/

function camelize(str) {
  const palabras = str.split(" ");
  let camelized = "";
  for (let i = 0; i < palabras.length; i++) {
    if (i === 0) {
      camelized += palabras[i][0].toLowerCase() + palabras[i].slice(1);
    } else {
      camelized += palabras[i][0].toUpperCase() + palabras[i].slice(1);
    }
  }
  return camelized;
}

console.assert(camelize("Hola a todos que tal") === "holaATodosQueTal");
