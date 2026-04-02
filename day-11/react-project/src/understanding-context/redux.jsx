import React, { useReducer } from "react";

function MiniRedux() {

  // Reducer function (like Redux reducer)
  const counterReducer = (count, action) => {
    switch (action.type) {
      case "UP":
        return count + 1;

      case "DOWN":
        return count - 1;

      default:
        return count;
    }
  };

  // useReducer hook (like Redux store + dispatch)
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h3>✅ Day 20: State Management Overview</h3>

      <h4>Redux Pattern Simulator</h4>

      <div>
        <h2>Value: {count}</h2>
      </div>

      <button onClick={() => dispatch({ type: "UP" })}>
        Dispatch UP
      </button>

      <button onClick={() => dispatch({ type: "DOWN" })}>
        Dispatch DOWN
      </button>

      <p>
        💡 <strong>Key Difference:</strong> Redux uses a single Store for the
        entire app, while Context can be split into many small providers.
      </p>
    </div>
  );
}

export default MiniRedux;