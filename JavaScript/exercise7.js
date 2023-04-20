/*

  Ejercicio 7
    • En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si
    lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. Esto
    se llama conteo de cartas.

    Tener más cartas altas en el mazo favorece al jugador. A cada carta se le asigna un valor de
    acuerdo con la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar alto.
    Cuando la cuenta es cero o negativa, el jugador debe apostar poco.

    Escribe una función de conteo de cartas. Tendrá un parámetro card, que puede ser un número
    o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo con el valor de
    card. La función devolverá una cadena con el recuento actual y la cadena Bet si el recuento es
    positivo, o Hold si el recuento es cero o negativo. El recuento actual y la decisión del jugador
    (Bet o Hold) deben estar separados por un solo espacio

    Count Cards
    +1 2, 3, 4, 5, 6
    0 7, 8, 9
    -1 10, J, Q, K, A

    Ejemplo:
    -3 Hold
    5 Bet
    let count = 0;

    function cc(card) {
      return "Implementar!";
    }

    cc(2);
    cc(3);
    cc(7);
    cc("K");
    cc("A");

*/

let count = 0;

function validateCard(card) {
  const validCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  return validCards.includes(card);
}

function cc(card) {
  if (validateCard(card)) {
    if (card >= 2 && card <= 6) {
      count++;
    } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
      count--;
    }

    if (count > 0) {
      return `${count} Bet`;
    } else {
      return `${count} Hold`;
    }
  } else {
    return "Invalid card";
  }
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
