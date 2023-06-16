import { useState } from "react";

const Exercise1 = () => {
    const [text, setText] = useState("");
    const handleText = (e: { target: { value: string } }) => {
        const updatedText = e.target.value.replace("a", "b");
        setText(updatedText);
    };
    return (
        <div>
            <input type="text" value={text} onChange={handleText} />
        </div>
    );
};
export default Exercise1;
