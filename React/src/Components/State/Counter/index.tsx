import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = (): void => {
        setCounter(counter + 1);
    };

    const decrement = (): void => {
        setCounter(counter - 1);
    };

    return (
        <>
            <div>{counter}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    );
}
export default Counter;
