import { useState } from "react"

function Todo()
{
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    // function for fetching the value
    function taskSetter(e)
    {
        setTask(e.target.value);
    }
    
    // function to add the task
    function addTask()
    {
        if(task.trim() === " ") return;

        setTodos([...todos, task]);
        setTask(" ")
    }

    // function to delete the task
    function deleteTask(index)
    {
        const newTodos = todos.filter((_,i) => i !== index)
        setTodos(newTodos);
    }

    return(
        <>
        <div className="todo">
            <h1> TO-DO APP </h1>

            {/* getting input from the user for the task */}
            <input type="text" onChange={taskSetter} value={task} 
            placeholder="Write your Task here" />

            {/* button to add the task */}
            <button className="btn" onClick={addTask}> Add </button>

            <ul>
                {/* Traversing through the list to display all the added tasks */}
                {todos.map((item, index)=> (
                    <li className="todolist" key={index}>

                        {item}
                        <button className="btn" onClick={() => deleteTask(index)}> - </button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Todo
