import { useId, useState } from "react";

function Select() {
    const [option, setOption] = useState("");
    const optionSelectId = useId();
    return (
        <>
            <label htmlFor={optionSelectId}>Elige una opción:</label>
            <select name="selectedOption" id={optionSelectId} defaultValue="" onChange={e => setOption(e.target.value)}>
                <option value="" disabled>
                    Seleccione una opción
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
            <p>{option ? "Opción seleccionada: " + option : ""}</p>
        </>
    );
}
export default Select;
