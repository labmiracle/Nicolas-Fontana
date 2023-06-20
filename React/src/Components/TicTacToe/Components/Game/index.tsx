import { useState } from "react";
import Board from "../Board";
import styles from "./index.module.scss";

export type Fichas = "X" | "O";

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    const handlePlay = (nextSquares: Fichas[]) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const jumpTo = (nextMove: number) => {
        setCurrentMove(nextMove);
    };

    let moves = history.map((_, move) => {
        let description;
        if (move > 0) {
            description = "Ir al movimiento #" + move;
        } else {
            description = "Ir al inicio del juego";
        }
        const isCurrentMove = move === history.length - 1;
        return isCurrentMove ? (
            <li key={move}>
                <p>Estás en el movimiento #{move}</p>
            </li>
        ) : (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    const toggleOrder = () => {
        setIsAscending(!isAscending);
    };

    if (!isAscending) {
        moves = moves.reverse();
    }

    return (
        <div className={styles.game}>
            <div className={styles.gameBoard}>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className={styles.gameInfo}>
                <button onClick={toggleOrder}>Cambiar orden: {isAscending ? "Ascendente" : "Descendente"}</button>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
export default Game;
