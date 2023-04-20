/*

  Ejercicio 4
    • Crea una función que reciba una frase como cadena y devuelva la palabra más larga:

    function palabraMasLarga(str) {
    }
    console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');

    • Crea una función que reciba una cadena y lo devuelva con todas las palabras con su
    primera letra mayúscula

    function primeraMayuscula(str) {
    }
    console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');

*/

// function palabraMasLarga(str) {
//   const palabras = str.split(" ");
//   let longitudMax = 0;
//   let palabraMasLarga = "";
//   for (let i = 0; i < palabras.length; i++) {
//     if (palabras[i].length > longitudMax) {
//       longitudMax = palabras[i].length;
//       palabraMasLarga = palabras[i];
//     }
//   }
//   return palabraMasLarga;
// }

function palabraMasLarga(str) {
  const palabras = str.split(" ");
  const palabrasOrdenadas = [...palabras].sort((a, b) => b.length - a.length);
  return palabrasOrdenadas[0]
}

console.assert(palabraMasLarga("Erase una vez que se era") === "Erase");
