import { Task } from "../ListContainer";
import ListItem from "../ListItem";
const List = ({ tasks, handleRemoveTask }: { tasks: Task[]; handleRemoveTask: (taskId: number) => void }) => {
    return (
        <ul>
            {tasks.map(task => (
                <ListItem task={task} handleRemoveTask={handleRemoveTask} />
            ))}
        </ul>
    );
};
export default List;
