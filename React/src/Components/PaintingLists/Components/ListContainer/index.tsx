import { useState } from "react";
import InputText from "../InputText";
import AddTaskButton from "../AddTaskButton";
import List from "../List";

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const ListContainer = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const generateRandomId = () => {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0];
    };

    const handleAddTask = () => {
        if (inputValue) {
            const newTask = {
                id: generateRandomId(),
                title: inputValue,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setInputValue("");
        }
    };

    const handleRemoveTask = (taskId: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handleEditTask = (updatedTask: string, taskId: number) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, title: updatedTask };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <>
            <InputText inputValue={inputValue} setInputValue={setInputValue} />
            <AddTaskButton handleAddTask={handleAddTask} />
            <List tasks={tasks} handleRemoveTask={handleRemoveTask} handleEditTask={handleEditTask} />
        </>
    );
};
export default ListContainer;
