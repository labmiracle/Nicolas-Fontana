const InputText = ({
    inputValue,
    setInputValue,
}: {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return <input value={inputValue} onChange={handleText} placeholder="Ingrese una tarea..." />;
};

export default InputText;
