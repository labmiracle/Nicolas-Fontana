import useFetch from "./hooks/useFetch";

const Exercise5 = () => {
    const listOfToDos = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <ul>
            {listOfToDos.map(item =>
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

export default Exercise5;
