import React, { useState, useMemo, memo } from "react";

// ============================================
// 1️⃣ THE RENDERING MYTH
// ============================================

/*
FACT: When a parent component re-renders, all children re-render.

WHY OPTIMIZE?
- Prevent UI lag
- Save CPU
- Handle large data

REACT.MEMO:
Re-renders only when props change.

USEMEMO:
Caches expensive calculations.
*/

// Heavy Component
const SlowComponent = memo(({ name }) => {
  console.log(`[Render] SlowComponent for ${name}`);

  // Simulate delay
  let startTime = performance.now();
  while (performance.now() - startTime < 100) {}

  return <div>🐢 Heavy Component: {name}</div>;
});

function MemoizationDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("[Calc] Running expensive loop...");
    return text.split("").reverse().join("");
  }, [text]);

  return (
    <div>
      <h3>Day 21-22: React.memo & useMemo</h3>

      <p>
        Incrementing the counter re-renders the parent, but React.memo prevents
        SlowComponent from re-rendering.
      </p>

      <p>
        Expensive Result: <strong>{expensiveCalculation}</strong>
      </p>

      <input
        placeholder="Type to trigger calculation"
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setCount(c => c + 1)}>
        Re-render Parent (Count: {count})
      </button>

      <br /><br />

      <SlowComponent name="Static Data" />
    </div>
  );
}

export default MemoizationDemo;