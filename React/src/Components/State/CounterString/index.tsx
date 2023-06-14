import { useState } from "react";

function CounterString() {
    const [text, setText] = useState("");
    const randomLetter = (): string => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    };

    const increment = (): void => {
        setText(text + randomLetter());
    };

    const decrement = (): void => {
        setText(text.slice(0, -1));
    };

    return (
        <>
            <p>{text}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}
export default CounterString;
