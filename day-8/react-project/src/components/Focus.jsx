import {useRef} from "react"

function Focus()
{
    const inputRef = useRef(null);
    function handleFocus()
    {
        console.log(`The value entered by user is: ${inputRef.current.value}`);
        inputRef.current.focus();
        inputRef.current.select();
    }



    return(
        <>
        <h2> Task 1: handle Focus and Select </h2>
        <input type="text" placeholder="Press button to select and gain the focus" ref={inputRef}/>
        <button onClick={handleFocus}> Focus and Select </button>
        </>
    )
}

export default Focus