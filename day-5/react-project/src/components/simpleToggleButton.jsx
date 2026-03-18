import { useState } from "react";

function ToggleButton() {
    const [visible, setVisble] = useState(false)

    // function to show data
    function showData() {
        setVisble(true);
    }

    // function to delete data
    function hideData() {
        setVisble(false);
    }

    return (
        <>
            <div className="toggleText">
                <h1> TOGGLE TEXT </h1>

                {/* condition is applied if the state is visible then a specific message will be 
                shown else nothing */}
                <p> {visible ? "Hello World" : "...."} </p>

                {/* Condition, if the text is visible then hide button shoild be shown and
                if text is not visible then show button should be shown */}
                <p> {visible ? <button className="btn" onClick={hideData}> Hide </button> :
                    <button className="btn" onClick={showData}> Show </button>
                } </p>

            </div>
        </>
    )
}

export default ToggleButton;