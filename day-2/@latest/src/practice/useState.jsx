import { useState } from "react"

function Counter()
{
    const[count, setCount] = useState(0);

    const incr = () => {setCount(count+1)};
    const decr = () => {setCount(count-1)};
    const reset = () => {setCount(0)};

    return(

        <>
        <h4> Here is the value for the counter </h4>
        <p> {count} </p>
        <button onClick={incr}> Incr </button>
        <button onClick={decr}> Decr </button>
        <button onClick={reset}> Reset </button>
        </>
    )
}
export default Counter