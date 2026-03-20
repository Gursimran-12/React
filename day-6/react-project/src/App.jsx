import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo App/To-do";
import AddSubTask from "./components/Todo App/addSubTask";

function App() {
  
  // Here, we are using global hooks as, this is required by multiple pages
  const [todos, setTodos] = useState([]);

  return (
    //  Router: Wraps the whole App
    <Router>

      {/* Routes: container of all the routes */}
      <Routes>

        {/* Route: Define each page, here this route is for home page */}
        <Route path="/" element={<Todo todos={todos} setTodos={setTodos} />} />

        {/* Route: Define each page, here this route is for Sub-task page */}
        {/* Here it is taking the dynamic URL, Like for task having index 0:seperate page, having index 1: seperate page 
        and it will get the index from navigate() */}
        <Route path="/subtask/:index" element={<AddSubTask todos={todos} setTodos={setTodos} />} />
      </Routes>
    </Router>
  );
}

export default App;