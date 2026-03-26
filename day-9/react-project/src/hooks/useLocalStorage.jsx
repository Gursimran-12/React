// =======================================================================================
// =======================================================================================
import { useState } from "react";

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  const setValue = (value) => {
    try {
      // Allow value to be a function (like useState)
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

// Using the useLocalStorage hook
function Example3_UseLocalStorage() {
  // Works exactly like useState, but persists to localStorage!
  const [name, setName] = useLocalStorage("userName", "");
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>Example 3: useLocalStorage Hook</h3>

      <div>
         <strong>Data persists after page refresh!</strong> Try refreshing the page.
      </div>

      <div>
        <label>Your Name: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        {name && <p>Hello, {name}!</p>}
      </div>

      <div>
        <h4>Todo List (Persisted)</h4>
        <form onSubmit={addTodo}>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a todo..."
          />
          <button type="submit">Add</button>
        </form>

        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Example3_UseLocalStorage