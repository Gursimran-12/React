import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import "../../App.css";

// function for the addition of the task
function AddSubTask({ todos, setTodos }) {

    const { index } = useParams();
    const navigate = useNavigate();

    const taskIndex = Number(index);
    const task = todos[taskIndex];

    const [subTask, setSubTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);


    // Function for the addition of sub-task
    function addSubTask() {
        if (subTask.trim() === "") return;

        const updatedTodos = [...todos];

        if (editIndex !== null) {
            updatedTodos[taskIndex].subTasks[editIndex].text = subTask;
            setEditIndex(null);
        } else {
            updatedTodos[taskIndex].subTasks.push({ text: subTask, completed: false });
        }

        setTodos(updatedTodos);
        setSubTask("");
    }

    // function for the deletion of subtask
    function deleteSubTask(subIndex) {
        const updatedTodos = [...todos];
        updatedTodos[taskIndex].subTasks =
            updatedTodos[taskIndex].subTasks.filter((_, i) => i !== subIndex);

        setTodos(updatedTodos);
    }

    // function to mark the subtask as completed
    function markDone(subIndex) {
        const updatedTodos = [...todos];

        // Toggle current subtask
        updatedTodos[taskIndex].subTasks[subIndex].completed =
            !updatedTodos[taskIndex].subTasks[subIndex].completed;

        // Check if ALL subtasks are completed
        const allCompleted = updatedTodos[taskIndex].subTasks.every(
            sub => sub.completed
        );

        // Update parent automatically
        updatedTodos[taskIndex].completed = allCompleted;

        setTodos(updatedTodos);
    }

    // Function to get edit index
    function editSubTask(subIndex) {
        setSubTask(task.subTasks[subIndex].text);
        setEditIndex(subIndex);
    }

    // Function to edit the sub-task 
    function updateSubTask(subIndex) {
        const updatedTodos = [...todos];
        updatedTodos[taskIndex].subTasks[subIndex].text = subTask;

        setTodos(updatedTodos);
        setEditIndex(null);
        setSubTask("");
    }

    // checking if any task is there or not
    if (!task) {
        return (
            <div className="todo">
                <p>Task not found</p>
                <button className="btn" onClick={() => navigate("/")}>
                    Back
                </button>
            </div>
        );
    }

    return (
        <div className="todo">

            {/* heading: Task for a sub-task */}
            <p className="todoHeading">{task.text}</p>

            {/* Getting input from the user */}
            <input id="taskInput" className="taskInput" type="text" placeholder="Write subtask..."
                value={subTask} onChange={(e) => setSubTask(e.target.value)} />

            <button className="btn" onClick={addSubTask}> Add
            </button>

            <button className="btn" onClick={() => navigate("/")}>
                Back
            </button>

            <ul>
                {task.subTasks.length === 0 ? (
                    <p style={{ color: "gray" }}>No SubTasks</p>
                ) : (
                    task.subTasks.map((item, i) => (
                        <li className="todoList" key={i} style={{ textDecoration: (item.completed || task.completed) ? "line-through" : "none" }} >
                            <div className="taskCard">
                                <div className="taskHeader">
                                    <input type="checkbox" checked={item.completed}
                                        onChange={() => markDone(i)} />

                                    {editIndex === i ? (
                                        <>
                                            <input
                                                className="taskInput"
                                                value={subTask}
                                                onChange={(e) => setSubTask(e.target.value)}
                                            />
                                            <button
                                                className="todoBtn"
                                                onClick={() => updateSubTask(i)}
                                            >
                                                Save
                                            </button>
                                        </>
                                    ) : (
                                        <span className={item.completed ? "completedTask" : ""}>
                                            {item.text}
                                        </span>
                                    )}
                                </div>

                                <div className="taskActions">
                                    <button className="todoBtn" onClick={() => deleteSubTask(i)}>
                                        X
                                    </button>


                                    <button className="todoBtn" onClick={() => editSubTask(i)}>
                                        <FaEdit />
                                    </button>

                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default AddSubTask;