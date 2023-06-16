import { useEffect } from "react";

const Exercise3 = ({ randomNumber }: { randomNumber: number }) => {
    useEffect(() => {
        console.log("Actualizado!");
    }, [randomNumber]);

    return <div>{randomNumber}</div>;
};
export default Exercise3;
