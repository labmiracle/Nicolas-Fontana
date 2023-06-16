import { Task } from "../ListContainer";
import RemoveTaskButton from "../RemoveTaskButton";
const ListItem = ({ task }: { task: Task }) => {
    return (
        <li key={task.id}>
            <span>{task.title}</span>
            <RemoveTaskButton />
        </li>
    );
};
export default ListItem;
