const AddTaskButton = ({ handleAddTask }: { handleAddTask: () => void }) => {
    return <button onClick={handleAddTask}>Agregar tarea</button>;
};
export default AddTaskButton;
