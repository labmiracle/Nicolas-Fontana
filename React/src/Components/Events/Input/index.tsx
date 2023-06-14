import { ChangeEvent, useState } from "react";

function Input() {
    const [text, setText] = useState("");
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    return (
        <div>
            <label htmlFor="text">Ingrese un texto</label>
            <input type="text" id="text" value={text} onChange={handleInput} />
            <p>{text}</p>
        </div>
    );
}
export default Input;
