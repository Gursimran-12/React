import { useState } from "react"
import '../../App.css'


function Task() {
    const [task, setTask] = useState(" ");
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // Function for setting the value after getting from the user's input
    function taskSetter(e) {
        setTask(e.target.value);
    }

    // function for the addition of the task
    function addTask() {
        if (task.trim() === "") return;

        if (editIndex !== null) {
            const updatedTodos = [...todos];
            updatedTodos[editIndex].text = task;
            setTodos(updatedTodos);
            setEditIndex(null);
        } else {
            setTodos([...todos, { text: task, completed: false }]);
        }

        setTask("");
    }

    // Function for the deletion of the task
    function deleteTask(index) {
        const newTodos = todos.filter((_, i) => i !== index)

        setTodos(newTodos);
    }

    //function for the edition of the task
    function editTask(index) {
        setTask(todos[index].text);
        setEditIndex(index);
    }

    // Function to mark as done
    function markDone(index) {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }

    return (
        <>
            <div className="subTask">

                <h3> Add the Sub-tasks</h3>

                {/* Getting task which is to be added from the user */}
                <input className="subTaskInput" type="text" placeholder="Write your task here" value={task} onChange={taskSetter} />

                {/* button to add the new task */}
                <button className="subTaskBtn" onClick={addTask}> Add </button>

                {/* for displaying all the tasks, we are using map here */}
                <ul>
                    {todos.map((item, index) => (
                        <li className="todoList" key={index} style={{
                            textDecoration: item.completed ? "line-through" : "none"
                        }}
                        >
                            <input className="subTaskCheckbox" type="checkbox" checked={item.completed} onChange={() => markDone(index)}
                            />
                            {item.text}
                            <button className="btnSmall" onClick={() => deleteTask(index)}> - </button>
                            <button className="btnSmall" onClick={() => editTask(index)}> Edit </button>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Task