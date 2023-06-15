import { useState } from "react";

function RenderizadoCondicional() {
    const [isLogged, SetIsLogged] = useState(false);
    return isLogged ? (
        <>
            <p>Esta página solo puedo verla por que estoy logueado</p>
            <button onClick={() => SetIsLogged(false)}>Logout</button>
        </>
    ) : (
        <>
            <p>Inicia sesión para ver contenido privado</p>
            <button onClick={() => SetIsLogged(true)}>Login</button>
        </>
    );
}
export default RenderizadoCondicional;
