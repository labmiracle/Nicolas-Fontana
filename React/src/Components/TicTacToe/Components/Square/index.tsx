import styles from "./index.module.scss";
import { Fichas } from "../Game";

function Square({ value, onSquareClick }: { value: Fichas; onSquareClick: () => void }) {
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    );
}
export default Square;
