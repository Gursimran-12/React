// 1. Character Counter
// - Input field
// - Show: "You typed 25 characters"

import { useState } from "react"
function CharacterCounter()
{
    const [char, setChar] = useState("");

    function handleInput(e)
    {
        setChar(e.target.value);
    }

    return(
        <>
        <input type="text" value={char} onChange={handleInput} placeholder="Write your text here" />
        <p> {char} </p>
        <p> length: {char.length} </p>
        </>
    )
}

export default CharacterCounter