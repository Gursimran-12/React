import { useState } from "react";

function MultipleCounters() {
  const [counters, setCounters] = useState([0, 0, 0]);

  const increase = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrease = (index) => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);
  };

  return (
    <div>
      <h1>Multiple Counters</h1>

      {counters.map((count, index) => (
        <div key={index}>
          <h2>Counter {index + 1}: {count}</h2>

          <button onClick={() => increase(index)}>+</button>
          <button onClick={() => decrease(index)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default MultipleCounters;