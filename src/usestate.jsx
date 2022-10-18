import react from 'react';
import React from 'react';
import { useState }
    from "react"

function Example() {
    const [Ian, setIan] = useState("Ian");

    return (
        <div>
            <p> {Ian}</p>
            <button onClick={() => setIan("idk")}>
                Click me
            </button>
        </div>
    );
}


export default Example;