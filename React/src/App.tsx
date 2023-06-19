import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/props">Props</Link>
                    </li>
                    <li>
                        <Link to="/state">State</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/renderizado-condicional">Renderizado Condicional</Link>
                    </li>
                    <li>
                        <Link to="/refs">Refs</Link>
                    </li>
                    <li>
                        <Link to="/context">Context</Link>
                    </li>
                    <li>
                        <Link to="/hoc">HOC</Link>
                    </li>
                    <li>
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li>
                        <Link to="/painting-list">Painting List</Link>
                    </li>
                </ul>
            </nav>
            <Routes />
        </Router>
    );
}

export default App;
