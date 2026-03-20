import { useState } from "react"
import '../../App.css'
import { useNavigate } from "react-router-dom";
import TodoImg from "../../assets/todo-Icon.png"
import { FaEdit } from "react-icons/fa";


function Todo({ todos, setTodos }) {

    const navigate = useNavigate();

    const [task, setTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

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
            setTodos([...todos, { text: task, completed: false, subTasks: [] }]);
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
        setEditIndex(index);
        setEditText(todos[index].text);
    }

    // Function to update the text
    function updateTask(index) {
        const updatedTodos = [...todos];
        updatedTodos[index].text = editText;
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditText("");
    }

    // Function to mark as done
    function markDone(index) {
        const updatedTodos = [...todos];

        const isCompleted = !updatedTodos[index].completed;
        updatedTodos[index].completed = isCompleted;
        updatedTodos[index].subTasks = updatedTodos[index].subTasks.map(sub => ({
            ...sub,
            completed: isCompleted
        }));

        setTodos(updatedTodos);
    }
    return (
        <>
            <div className="todo">

                {/* heading for todo App */}
                <p className="todoHeading"> <img className="IconImg" src={TodoImg} alt="To-do Image" /> TODO APP </p>


                {/* Getting task which is to be added from the user */}
                <input id="taskInput" className="taskInput" type="text" placeholder="Write your task here" value={task}
                    onChange={taskSetter} />

                {/* button to add the new task */}
                <button className="btn" onClick={addTask}>
                    {editIndex !== null ? "Update" : "Add"}
                </button>

                {/* for displaying all the tasks, we are using map here */}
                <ul>

                    {/* checking if todo list is empty or filled, if it is empty then a msg should be displayed */}
                    {todos.length === 0 ? (
                        <p style={{ marginTop: "20px", color: "gray" }}>
                            Nothing to Show
                        </p>
                    ) : (
                        todos.map((item, index) => (
                            <li className="todoList" key={index}>
                                <div className="taskCard">

                                    <div className="taskHeader">
                                        <input className="taskCheckbox" type="checkbox" checked={item.completed} onChange={() => markDone(index)} />

                                        {editIndex === index ? (
                                            <>
                                                <input
                                                    className="taskInput"
                                                    value={editText}
                                                    onChange={(e) => setEditText(e.target.value)}
                                                />
                                                <button className="todoBtn" onClick={() => updateTask(index)}>
                                                    Save
                                                </button>
                                            </>
                                        ) : (
                                            <span className={item.completed ? "completedTask" : ""}>
                                                {item.text}
                                            </span>
                                        )}
                                    </div>

                                    {item.subTasks.length > 0 && (
                                        <ul className="subTaskList">
                                            {item.subTasks.map((sub, i) => (
                                                <li
                                                    key={i}
                                                    className={(sub.completed || item.completed) ? "completedSubTask" : ""}
                                                >
                                                    • {sub.text}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="taskActions">
                                        <button className="todoBtn" onClick={() => deleteTask(index)}>X</button>
                                        <button className="todoBtn" onClick={() => editTask(index)}> <FaEdit /> </button>
                                        <button className="todoBtn" onClick={() => navigate(`/subtask/${index}`)}>SubTask</button>
                                    </div>

                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    )
}

export default Todo