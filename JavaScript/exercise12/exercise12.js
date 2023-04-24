/*

  Ejercicio 12
    • Vamos a armar el juedo de ”Adivinar el número”. El juego consiste de los siguiente: La
    computadora genera un número aleatorio entre 1 y 10. Luego nos pide que adivinemos el
    número. Si el número que ingresamos es menor que el que genero la maquina nos muestra
    el mensaje ”El número es mayor”. Si el número que ingresamos es mayor nos muestra el
    mensaje ”El número es menor”. Cuando hayamos acertado el valor nos informa del fin del
    juego.

    • Agregue al juego anterior niveles de dificultad

*/

function guessNumberGame() {
  // Dificultad
  const maxNumber = [10, 25, 60];
  const maxTries = [3, 4, 5];

  const level = parseInt(prompt("Seleccione el nivel de dificultad: \n1) Fácil \n2) Medio \n3) Difícil"));
  if (![1, 2, 3].includes(level)) {
    alert("El nivel seleccionado no es válido");
    return;
  }

  const randomNumber = Math.floor(Math.random() * maxNumber[level - 1]) + 1;

  // Juego
  let tries = 0;
  let guess = NaN;
  while (tries < maxTries[level - 1] && guess !== randomNumber) {
    guess = parseInt(prompt(`Adivina el número entre el rango [1 - ${maxNumber[level-1]}] (intentos restantes: ${maxTries[level - 1] - tries}):`));
    if (isNaN(guess)) {
      alert("Debes ingresar un número válido");
    } else if (guess < randomNumber) {
      alert("El número es mayor");
      tries++;
    } else if (guess > randomNumber) {
      alert("El número es menor");
      tries++;
    }
  }

  // Resultado
  if (guess === randomNumber) {
    console.log(tries)
    alert(`Felicitaciones, adivinaste el número '${randomNumber}' en ${tries + 1} intentos!`);
  } else {
    alert(`Lo siento, no pudiste adivinar el número '${randomNumber}' en ${maxTries[level - 1]} intentos`);
  }
}

guessNumberGame()

const buttonPlay = document.getElementById("play")
buttonPlay.addEventListener("click", guessNumberGame)
