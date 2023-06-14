import Counter from "./Counter";
import CounterString from "./CounterString";
import CounterRefactoring from "./CounterRefactoring/Counter";
function State() {
    return (
        <>
            <Counter />
            <CounterString />
            <CounterRefactoring />
        </>
    );
}
export default State;
