// Focusing and selecting the input

import {useRef} from "react"

function Focus()
{

    const inputRef = useRef(null);

    const handleFocus = () => {

        console.log("Input text is: ", inputRef.current.value);

        inputRef.current.focus();
        inputRef.current.select();
    }

    return(
        <>
        <h2> Task 1: Focusing and Selecting the Input</h2>
        <input type="text" ref={inputRef} placeholder="Click the button to select and focus the input"/>

        <button onClick={handleFocus}> Click to select and focus </button>
        </>
    )
}

export default Focus

