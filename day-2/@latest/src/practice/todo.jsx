import { useState } from "react"

function TodoApp()
{
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function taskSetter(e)
    {
        setTask(e.target.value);
    }

    function addTask()
    {
        if(task.trim() === "") return;
        setTodos([...todos, {text: task, completed: false}]);
        setTask("");
    }

    function toggleTask(index)
    {
        const newTodos = todos.map((item,i) => {
            if(i === index)
            {
                return {...item, completed: !item.completed}
            }
            return item;
        });
        setTodos(newTodos);
    }

    function deleteTask(index)
    {
        const newTodos = todos.filter((_,i) => i !== index)
        setTodos(newTodos);
    }

    return(
        <>
        <h4> TODO APP </h4>
        <input type="text" value={task} onChange={taskSetter} placeholder="Write your task here" />
        <button onClick={addTask}> Add </button>
        <ul>
            {todos.map((item,index) => (
                <li key={index}>
                    <input type="checkbox" checked={item.completed} onChange={() => toggleTask(index)} /> 
                    <span style={{textDecoration: item.completed ? "line-through" : "none"}}>
                        {item.text}

                    </span>

                    <button onClick={()=> deleteTask(index)}> X </button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default TodoApp