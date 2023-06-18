import { useEffect, useState } from "react";

interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Exercise4 = () => {
    const [toDo, setToDo] = useState<ToDo[]>([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            setToDo(data);
        };
        getData();
    }, []);
    return (
        <ul>
            {toDo.map(item =>
                item.completed === true ? (
                    <li key={item.id}>
                        <del>{item.title}</del>
                    </li>
                ) : (
                    <li key={item.id}>{item.title}</li>
                )
            )}
        </ul>
    );
};
export default Exercise4;
