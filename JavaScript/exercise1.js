/*
  Ejercicio 1
    • En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio de
    golpes que se espera que haga un golfista para meter la bola en un hoyo y así completar
    el juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existe
    un apodo diferente.
    Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta de
    acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba (más alto)
    a abajo (más bajo):

    Strokes Return
    1 "Hole-in-one!"
    <= par - 2 "Eagle"
    par - 1 "Birdie"
    par "Par"
    par + 1 "Bogey"
    par + 2 "Double Bogey"
    >= par + 3 "Go Home!"

    const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
    ];

    function golfScore(par, strokes) {
    return "Implementar!";
    }

    golfScore(5, 4);
*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (typeof par !== "number" || typeof strokes !== "number" || par < 1 || strokes < 1) {
    return "The data entered must be numbers greater than 0";
  } else if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}

const result = golfScore(5, 4);

console.log(result)
