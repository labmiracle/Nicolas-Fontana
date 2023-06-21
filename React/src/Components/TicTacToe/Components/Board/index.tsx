import Square from "../Square";
import styles from "./index.module.scss";
import { Fichas } from "../Game";

function Board({
    xIsNext,
    squares,
    onPlay,
}: {
    xIsNext: boolean;
    squares: Fichas[];
    onPlay: (nextSquares: Fichas[], i: number) => void;
}) {
    const handleClick = (i: number) => {
        const nextSquares = [...squares];
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares, i);
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner === "Draw") {
        status = "Empate";
    } else if (winner?.squares) {
        status = "Ganador: " + winner.squares;
    } else {
        status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
    }

    const boardRows = [];
    for (let row = 0; row < 3; row++) {
        const boardColumns = [];
        for (let col = 0; col < 3; col++) {
            const squareIndex = row * 3 + col;
            const isWinningSquare = winner !== null && winner !== "Draw" && winner.line.includes(squareIndex);
            boardColumns.push(
                <Square
                    key={squareIndex}
                    value={squares[squareIndex]}
                    onSquareClick={() => handleClick(squareIndex)}
                    isWinningSquare={isWinningSquare}
                />
            );
        }
        boardRows.push(
            <div key={row} className={styles.boardRow}>
                {boardColumns}
            </div>
        );
    }

    return (
        <>
            <div className={styles.status}>{status}</div>
            {boardRows}
        </>
    );
}
export default Board;

const calculateWinner = (squares: Fichas[]) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { squares: squares[a], line: lines[i] };
        }
    }
    if (squares.every(square => square)) {
        return "Draw";
    }
    return null;
};
