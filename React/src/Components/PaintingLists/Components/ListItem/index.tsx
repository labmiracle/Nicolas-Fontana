import { useState } from "react";
import { Task } from "../ListContainer";
import RemoveTaskButton from "../RemoveTaskButton";

const ListItem = ({
    task,
    handleRemoveTask,
    handleEditTask,
}: {
    task: Task;
    handleRemoveTask: (taskId: number) => void;
    handleEditTask: (updatedTask: string, taskId: number) => void;
}) => {
    const [editing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.title);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTask(e.target.value);
    };

    const handleSave = () => {
        if (editedTask.trim() !== "") {
            handleEditTask(editedTask, task.id);
            setEditing(false);
        }
    };

    const handleCancel = () => {
        setEditing(false);
    };

    return (
        <li key={task.id}>
            {editing ? (
                <>
                    <input type="text" onChange={handleChange} value={editedTask} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{task.title}</span>
                    <button onClick={handleEdit}>Editar tarea</button>
                    <RemoveTaskButton clickAction={() => handleRemoveTask(task.id)} />
                </>
            )}
        </li>
    );
};

export default ListItem;
