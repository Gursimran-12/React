import { useEffect } from "react";
import { useState, useRef } from "react"

function Tracker() {
    const prevCountRef = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        prevCountRef.current = count;

    }, [count])

    function incr() {
        setCount(count => count + 1);
    }

    function decr() {
        setCount(count => count - 1);
    }

    function reset()
    {
        setCount(0);
        prevCountRef.current = 0;
    }


    return (
        <>
            <h2> Task 3: Track previous value </h2>
            <p> Current count: {count} </p>
            <button onClick={incr}> Increment </button>
            <button onClick={decr}> decrement </button>
            <button onClick = {reset}> Reset </button>
            <p> Previous count: {prevCountRef.current} </p>

        </>
    )
}

export default Tracker