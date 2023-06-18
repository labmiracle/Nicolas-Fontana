const RemoveTaskButton = ({ clickAction }: { clickAction: () => void }) => {
    return <button onClick={clickAction}>Eliminar tarea</button>;
};
export default RemoveTaskButton;
