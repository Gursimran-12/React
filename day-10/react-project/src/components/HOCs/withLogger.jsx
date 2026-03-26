import { useState, useEffect } from "react";

// HOC: logs lifecycle
function withLogger(Component, componentName) {
    return function WithLogger(props) {
        useEffect(() => {
            console.log(`[${componentName}] Mounted`);
            console.log(`[${componentName}] Props:`, props);

            return () => {
                console.log(`[${componentName}] Unmounted`);
            };
        }, [props]);

        return <Component {...props} />;
    };
}

// Simple Counter component
function Counter({ initialCount = 0 }) {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                +1
            </button>

            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
        </div>
    );
}

// Enhanced component
const CounterWithLogger = withLogger(Counter, "Counter");

// Main Example
function Example_withLogger() {
    const [showCounter, setShowCounter] = useState(true);

    return (
        <div>
            <hr />
            <h3>withLogger Example</h3>

            <p> Open console (F12) to see logs</p>

            <button onClick={() => setShowCounter(!showCounter)}>
                {showCounter ? "Unmount" : "Mount"} Counter
            </button>

            {showCounter && <CounterWithLogger initialCount={10} />}
        </div>
    );
}

export default Example_withLogger