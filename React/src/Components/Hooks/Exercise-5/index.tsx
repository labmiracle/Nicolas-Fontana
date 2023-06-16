import useFetch from "./hooks/useFetch";

const Exercise5 = () => {
    const listOfToDos = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <ul>
            {listOfToDos.map(item =>
                item.completed === true ? (
                    <li>
                        <del>{item.title}</del>
                    </li>
                ) : (
                    <li>{item.title}</li>
                )
            )}
        </ul>
    );
};

export default Exercise5;
