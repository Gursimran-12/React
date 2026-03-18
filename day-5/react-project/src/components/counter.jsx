import { useState } from 'react'

function SimpleCounter() {
    
    // using useState() here
    const [counter, setCounter] = useState(0);

    // function for incrementing the value
    function incr() {
        setCounter(counter + 1);
    }

    // function for decrementing the value
    function decr() {
        setCounter(counter - 1);
    }

    // function for resetting the value
    function resetVal() {
        setCounter(0)
    }

    return (
        <>
            <div className='counterBox'>

                {/* heading of the counter */}
                <h1> COUNTER </h1>
                <h2> {counter} </h2>

                {/* Button for Increment */}
                <button className='btn' onClick={incr}> Increment </button>

                {/* Button for Decrement */}
                <button className='btn' onClick={decr}> Decrement </button>

                {/* Button for Reset */}
                <button className='btn' onClick={resetVal}> Reset </button>
            </div>
        </>
    )
}

export default SimpleCounter
