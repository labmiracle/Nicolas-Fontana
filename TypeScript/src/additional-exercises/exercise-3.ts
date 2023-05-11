/*
  Juego de cartas
  Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que
  obtiene el número más alto gana.
    1. Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo
      menos mientras se este utilizando ese mazo
    2. Las cartas que saca cada jugador deben salir en orden aleatorio
*/

const generateDeck = (deckSize: number): number[] => {
    const deck: number[] = [];
    for (let i = 1; i <= deckSize; i++) {
        deck.push(i);
    }
    return deck;
};

const shuffleDeck = (deck: number[]): number[] => {
    return deck.sort(() => Math.random() - 0.5);
};

const pickCard = (deck: number[]): number => {
    if (deck.length === 0) {
        return 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const card: number = deck.pop()!;
    return card;
};

const playGame = (deckSize: number) => {
    const deck = generateDeck(deckSize);
    shuffleDeck(deck);
    const scoreboard = {
        player1: 0,
        player2: 0,
    };
    let cont = 0;
    do {
        const player1Card: number = pickCard(deck);
        const player2Card: number = pickCard(deck);
        console.log(`Ronda ${cont++}`);
        if (player1Card > player2Card) {
            scoreboard.player1++;
            console.log(`Carta del jugador 1: ${player1Card}\nCarta del jugador 2: ${player2Card}\n`);
        } else {
            scoreboard.player2++;
            console.log(`Carta del jugador 1: ${player1Card}\nCarta del jugador 2: ${player2Card}\n`);
        }
    } while (deck.length > 1);
    console.log("Fin del juego. No quedan más cartas en el mazo");
    if (scoreboard.player1 > scoreboard.player2) {
        console.log("El ganador es el jugador 1");
    } else if (scoreboard.player1 < scoreboard.player2) {
        console.log("El ganador es el jugador 2");
    } else {
        console.log("Empate");
    }
    return scoreboard;
};

console.log(playGame(20));
