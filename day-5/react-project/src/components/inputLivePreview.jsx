import { useState } from "react"

function LivePreview()
{
    const[text, setText] = useState("")
    // function for fetching the data
    function displayContent(e)
    {
        setText(e.target.value);
    }

    // function to clear the text entered
    function clearVal()
    {
        setText("")
    }

    return(
    <>
    <div className="inputPreview">

        {/* heading of the box */}
        <h1> LIVE INPUT PREVIEW </h1>

        {/* getting the text from the user */}
        <input type="text" value= {text} onChange={displayContent} placeholder="Write Something here" />

        {/* checking if any text is there or not, if text is there then Hello and the text written by the user
        will be shared */}
        <h2> {text && `Hello, ${text}`} </h2>

        {/* Clear button to clear the text enter */}
        <button className="btn" onClick={clearVal} > Clear </button>
    </div>

    </>
    )
}

export default LivePreview