import { useState } from "react";
import Task from "./tasks";

function AddSubTask() {

    // setting the subtask
    const [subTasks, setSubTasks] = useState([]);

    // function to add subtask
    function addTask() {
        setSubTasks([...subTasks, {}]);
    }

    //function to delete the subtask
    function deleteTask(indexToDelete) {
        const updatedTasks = subTasks.filter((_, index) => index !== indexToDelete);
        setSubTasks(updatedTasks);
    }
    return (
        <>

        {/* Button for the editoins of subtask */}
            <button className="todoBtn" onClick={addTask}>
                SubTask
            </button>
            
            {/* Subtask box, where user can add the task */}
            <div style={{ marginTop: "15px" }}>
                {subTasks.map((_, index) => (
                    <div className="subTaskBox" key={index}>

                        {/* Task is called for the additons of further sub-tasks */}
                        <Task />

                        {/* Button to delete the added sub-tasks */}
                        <button
                            className="deleteBtn"
                            onClick={() => deleteTask(index)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AddSubTask;