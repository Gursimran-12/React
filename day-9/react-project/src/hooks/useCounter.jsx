// Program to create the Custom Hook for React Component 
import { useState } from "react";

function useCounter(initialValue = 0, step = 1) {
    const [count, setCount] = useState(initialValue);

    const increment = () => { setCount(count + step) };
    const decrement = () => { setCount(count - step) };
    const reset = () => (setCount(initialValue));

    return { count, increment, decrement, reset }
}

function Example1UseCounter() {
    const counter = useCounter(0, 1);
    const fastCounter = useCounter(0, 10);


    return (
        <>
            <div>
                <h3> Example 1: Using useCounter Hook </h3>
                <hr />
                <h4> Counter (Step:1) </h4>
                <p> {counter.count} </p>
                <button onClick={counter.increment}> +1 </button>
                <button onClick={counter.decrement}> - 1 </button>
                <button onClick={counter.reset}> Reset </button>
                <hr />

                <h4> Fast Counter (Step:10) </h4>
                <p> {fastCounter.count} </p>
                <button onClick={fastCounter.increment}> +1 </button>
                <button onClick={fastCounter.decrement}> - 1 </button>
                <button onClick={fastCounter.reset}> Reset </button>
                <hr />
            </div>
        </>
    )
}
export default Example1UseCounter