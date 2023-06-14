import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function Counter() {
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
            <Display text={text} />
            <Button clickAction={increment}>Increment</Button>
            <Button clickAction={decrement}>Decrement</Button>
        </>
    );
}
export default Counter;
