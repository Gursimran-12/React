import { useState, useRef } from "react"

function HookComp() {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    const renderCount = useRef(0)

    renderCount.current = renderCount.current + 1;

    const incrementState = () => {
        setStateCount(stateCount + 1);
        console.log("Component will re-render");
        console.log("Render Count:", renderCount)
    }

    const incrementRef = () => {
        refCount.current = refCount.current + 1;
        console.log("Ref incremented, but the component will not re-render");
        console.log("Ref incremented ", refCount);
        console.log("Render Count", renderCount)
    }


    return (
        <>
            <h2> Task 4: Comparison between useRef v/s useState </h2>
            <h4> useState() </h4>
            <p> {stateCount} </p>
            <button onClick={incrementState}> Increment State </button>
            <button onClick={incrementRef}> Increment Ref </button>
        </>
    )
}

export default HookComp