import { useState } from "react";

function Toggle()
{
    const [show, setShow] = useState(false);

    function setVisibility()
    {
        setShow(!show);
    }

    return(
        <>
        <p> {show ? "Hello, showing text" : "Bye, hidingin the text"} </p>
        <button onClick={setVisibility}>
            {show ? "Hide" : "show"}
        </button>
        </>
    )
}

export default Toggle