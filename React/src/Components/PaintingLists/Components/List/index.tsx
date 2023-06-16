import { Task } from "../ListContainer";
import ListItem from "../ListItem";
const List = ({ tasks }: { tasks: Task[] }) => {
    return (
        <ul>
            {tasks.map(task => (
                <ListItem task={task} />
            ))}
        </ul>
    );
};
export default List;
