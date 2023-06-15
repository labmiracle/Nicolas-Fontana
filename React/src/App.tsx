import Props from "./Components/Props";
import State from "./Components/State";
import Events from "./Components/Events";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";

function App() {
    return (
        <>
            <h1>Props</h1>
            <Props />
            <h1>State</h1>
            <State />
            <h1>ToDo</h1>
            <Events />
            <h1>Renderizado condicional</h1>
            <RenderizadoCondicional />
        </>
    );
}

export default App;
