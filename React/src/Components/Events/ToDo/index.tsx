import { useState } from "react";

function ToDo() {
    const [toDo, setToDo] = useState("");
    const callToDo = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const data = await response.json();
            const json = JSON.stringify(data);
            setToDo(json);
        } catch (error) {
            console.error("Error fetching data ", error);
        }
    };

    const clearToDo = () => {
        setToDo("");
    };

    return (
        <>
            <div>{toDo}</div>
            <button onClick={callToDo}>Obtener tarea</button>
            <button onClick={clearToDo}>Borrar tarea</button>
        </>
    );
}
export default ToDo;
