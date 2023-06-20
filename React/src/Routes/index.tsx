import { Routes, Route } from "react-router-dom";
import Props from "../Components/Props";
import State from "../Components/State";
import Events from "../Components/Events";
import RenderizadoCondicional from "../Components/RenderizadoCondicional";
import Refs from "../Components/Refs";
import Context from "../Components/Context";
import ListOfPostsWithDataFetched from "../Components/HOC";
import Hooks from "../Components/Hooks";
import PaintingList from "../Components/PaintingLists";
import TicTacToe from "../Components/TicTacToe";

function RoutesPage() {
    return (
        <Routes>
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/events" element={<Events />} />
            <Route path="/renderizado-condicional" element={<RenderizadoCondicional />} />
            <Route path="/refs" element={<Refs />} />
            <Route path="/context" element={<Context />} />
            <Route
                path="/hoc"
                element={<ListOfPostsWithDataFetched url="https://jsonplaceholder.typicode.com/posts" />}
            />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/painting-list" element={<PaintingList />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />}/>
        </Routes>
    );
}
export default RoutesPage;
