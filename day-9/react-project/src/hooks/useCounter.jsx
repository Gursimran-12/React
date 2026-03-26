// Program to create a Simple Custom Hook
import {useState} from "react"

function useCounter(initialValue, step)
{
    const [count, setCount] = useState(initialValue);
    
    const increment = () => {setCount(count+step)};
    const decrement = () => {setCount(count-step)};
    const reset = () => {setCount(initialValue)};

    return{count, increment, decrement, reset};
}

function Example1()
{
    const counter = useCounter(0,1);
    const fastCounter = useCounter(0,10);


    return(
        <>
        <h3> Example 1 </h3>
        <h4> Simple Counter (Step-1) </h4>
        <p> {counter.count} </p>
        <button onClick={counter.increment}> +1 </button>
        <button onClick={counter.decrement}> -1 </button>
        <button onClick={counter.reset}> reset </button>
        <hr />
        <h4> Fast Counter (Step-10) </h4>
        <p> {fastCounter.count} </p>
        <button onClick={fastCounter.increment}> +10 </button>
        <button onClick={fastCounter.decrement}> -10 </button>
        <button onClick={fastCounter.reset}> reset </button>
        </>
    )
}
export default Example1;