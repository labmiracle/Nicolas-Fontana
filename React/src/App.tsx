import Props from "./Components/Props";
import State from "./Components/State";
import Events from "./Components/Events";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import Refs from "./Components/Refs";
import Context from "./Components/Context";
import ListOfPostsWithDataFetched from "./Components/HOC";

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
            <h1>Refs</h1>
            <Refs />
            <h1>Context</h1>
            <Context />
            <h1>HOC</h1>
            <ListOfPostsWithDataFetched url="https://jsonplaceholder.typicode.com/posts" />
        </>
    );
}

export default App;
