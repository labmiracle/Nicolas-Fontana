import { useEffect } from "react";

const Exercise2 = () => {
    useEffect(() => {
        return () => {
            console.log("desmontado");
        };
    }, []);

    return (
        <div>
            <p>Componente montado!</p>
        </div>
    );
};
export default Exercise2;
