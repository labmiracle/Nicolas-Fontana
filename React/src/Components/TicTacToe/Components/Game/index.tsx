import { useState, useEffect } from "react";
import Board from "../Board";
import styles from "./index.module.scss";

export type Fichas = "X" | "O";

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);
    const [locationSquare, setLocationSquare] = useState<{ col: number; row: number }[]>([]);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    const handlePlay = (nextSquares: Fichas[]) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    useEffect(() => {
        if (currentMove > 0) {
            const prevSquares = history[currentMove - 1];
            const prevMove = prevSquares.findIndex((square, i) => square !== currentSquares[i]);
            const row = Math.floor(prevMove / 3) + 1;
            const col = (prevMove % 3) + 1;
            const nextLocationSquare = [...locationSquare.slice(0, currentMove - 1), { col: col, row: row }];
            setLocationSquare(nextLocationSquare);
        }
    }, [currentMove, currentSquares, history]);

    const jumpTo = (nextMove: number) => {
        setCurrentMove(nextMove);
    };

    let moves = history.map((_, move) => {
        let description;
        if (move > 0) {
            if (locationSquare[move - 1]) {
                description = `Ir al movimiento #${move} - Movimiento hecho: (${locationSquare[move - 1].col}, ${
                    locationSquare[move - 1].row
                })`;
            } else {
                description = "Movimiento #" + move;
            }
        } else {
            description = "Ir al inicio del juego";
        }
        const isCurrentMove = move === history.length - 1 && move !== 0;
        return isCurrentMove ? (
            <li key={move}>
                <p>
                    Estás en el movimiento #{move} - Movimiento hecho: ({locationSquare[move - 1]?.col},{" "}
                    {locationSquare[move - 1]?.row})
                </p>
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
