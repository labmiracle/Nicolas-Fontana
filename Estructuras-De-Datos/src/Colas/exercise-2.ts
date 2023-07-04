class CircularQueue {
    private players: string[];
    private currentPlayerIndex: number;
    constructor(players: string[]) {
        this.players = players;
        this.currentPlayerIndex = 0;
    }

    passPotato(): void {
        const currentPlayer = this.players[this.currentPlayerIndex];
        let nextPlayerIndex = this.currentPlayerIndex + 1;

        if (nextPlayerIndex === this.players.length) {
            nextPlayerIndex = 0;
        }

        const nextPlayer = this.players[nextPlayerIndex];

        console.log(`${currentPlayer} pasa la papa caliente a ${nextPlayer}...`);

        this.currentPlayerIndex = nextPlayerIndex;
    }

    playGame() {
        console.log("Comienza el juego de la papa caliente...");
        const turnDuration = Math.floor(Math.random() * 5000) + 1000;

        const passPotatoRecursive = (remainingTime: number) => {
            if (remainingTime <= 0) {
                const eliminatedPlayer = this.players.splice(this.currentPlayerIndex, 1)[0];
                console.log(`${eliminatedPlayer} queda eliminado del juego.`);

                if (this.currentPlayerIndex >= this.players.length) {
                    this.currentPlayerIndex = 0;
                }

                if (this.players.length === 1) {
                    console.log(`¡${this.players[0]} es el ganador del juego de la Papa caliente!`);
                    return;
                }

                const nextTurnDuration = Math.floor(Math.random() * 5000) + 1000;
                setTimeout(() => {
                    passPotatoRecursive(nextTurnDuration);
                }, nextTurnDuration);
            } else {
                const reactionTime = Math.floor(Math.random() * 601) + 800;

                setTimeout(() => {
                    this.passPotato();
                    passPotatoRecursive(remainingTime - reactionTime);
                }, reactionTime);
            }
        };

        passPotatoRecursive(turnDuration);
    }
}

const players = ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"];
const potatoGame = new CircularQueue(players);
potatoGame.playGame();
