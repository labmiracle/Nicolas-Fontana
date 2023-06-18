import { Task } from "../ListContainer";
import RemoveTaskButton from "../RemoveTaskButton";
const ListItem = ({ task, handleRemoveTask }: { task: Task; handleRemoveTask: (taskId: number) => void }) => {
    return (
        <li key={task.id}>
            <span>{task.title}</span>
            <RemoveTaskButton clickAction={() => handleRemoveTask(task.id)} />
        </li>
    );
};
export default ListItem;
