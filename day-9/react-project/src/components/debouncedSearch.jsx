import { useState, useEffect } from "react";

function DebounceExample() {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  // Debouncing logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);

    // Cleanup → cancels previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // This runs ONLY after debounce delay
  useEffect(() => {
    if (debouncedValue) {
      console.log("Searching for:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      <h2>Debouncing in React</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Typed Value: {input}</p>
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default DebounceExample;