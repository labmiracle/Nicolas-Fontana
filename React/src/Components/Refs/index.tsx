import { useRef } from "react";

function Refs() {
    const nameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Name: ", nameRef.current?.value);
        console.log("Lastname: ", lastNameRef.current?.value);
        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" placeholder="Name" id="name" />
            <label htmlFor="lastname">Lastname</label>
            <input ref={lastNameRef} type="text" placeholder="Lastname" id="lastname" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Refs;
