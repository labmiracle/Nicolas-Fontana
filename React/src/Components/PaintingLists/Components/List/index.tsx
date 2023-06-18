import { Task } from "../ListContainer";
import ListItem from "../ListItem";
const List = ({
    tasks,
    handleRemoveTask,
    handleEditTask,
}: {
    tasks: Task[];
    handleRemoveTask: (taskId: number) => void;
    handleEditTask: (updatedTask: string, taskId: number) => void;
}) => {
    return (
        <ul>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    task={task}
                    handleRemoveTask={handleRemoveTask}
                    handleEditTask={handleEditTask}
                />
            ))}
        </ul>
    );
};
export default List;
