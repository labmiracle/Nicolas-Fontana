const RemoveTaskButton = ({ handleRemoveTask }: { handleRemoveTask: (taskId: number) => void }) => {
    return <button onClick={() => handleRemoveTask}>Eliminar tarea</button>;
};
export default RemoveTaskButton;
