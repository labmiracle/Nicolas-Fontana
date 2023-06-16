import { useEffect, useState } from "react";

interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const useFetch = (url: string) => {
    const [toDo, setToDo] = useState<ToDo[]>([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setToDo(data);
        };
        getData();
    }, [url]);
    return toDo;
};

export default useFetch;
