import { useState } from "react";
import Exercise1 from "./Exercise-1";
import Exercise2 from "./Exercise-2";
import Exercise3 from "./Exercise-3";
import Exercise4 from "./Exercise-4";
import Exercise5 from "./Exercise-5";

const Hooks = () => {
    const [show, setShow] = useState(true);
    const [randomNumber, setRandomNumber] = useState(0);
    return (
        <>
            <div>
                <p>Exercise 1</p>
                <Exercise1 />
            </div>
            <div>
                <p>Exercise 2</p>
                {show && <Exercise2 />}
                <button onClick={() => setShow(!show)}>Switch</button>
            </div>
            <div>
                <p>Exercise 3</p>
                <Exercise3 randomNumber={randomNumber} />
                <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}>Random Number</button>
            </div>
            <div>
                <p>Exercise 4</p>
                <Exercise4 />
            </div>
            <div>
                <p>Exercise 5</p>
                <Exercise5 />
            </div>
        </>
    );
};
export default Hooks;
