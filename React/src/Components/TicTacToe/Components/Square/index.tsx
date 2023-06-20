import styles from "./index.module.scss";
import { Fichas } from "../Game";

function Square({
    value,
    onSquareClick,
    isWinningSquare,
}: {
    value: Fichas;
    onSquareClick: () => void;
    isWinningSquare: boolean;
}) {
    return (
        <button className={`${styles.square} ${isWinningSquare ? styles.winningSquare : ""}`} onClick={onSquareClick}>
            {value}
        </button>
    );
}
export default Square;
