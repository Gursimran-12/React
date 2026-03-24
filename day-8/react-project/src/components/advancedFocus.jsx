import { useState, useEffect, useRef } from "react";

function AdvancedFocus() {
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const inputRef = useRef(null);
    const editInputRef = useRef({});

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (editingId !== null) {
            editInputRef.current[editingId]?.focus();
        }
    }, [editingId]);

    const addTask = (e) => {
        e.preventDefault();
        const text = inputRef.current.value.trim();

        if (text) {
            setTasks([...tasks, { id: Date.now(), text }]);
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    };

    const startEdit = (id) => {
        setEditingId(id);
    };

    const saveEdit = (id) => {
        const newText = editInputRef.current[id].value.trim();

        if (newText) {
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, text: newText } : task
                )
            );
        }
        setEditingId(null);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <h2>Task 5: Focus Management</h2>

            <form onSubmit={addTask}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Write a task here..."
                />
                <button type="submit">Add</button>
            </form>

            {tasks.map((task) => (
                <div key={task.id}>
                    {editingId === task.id ? (
                        <>
                            <input
                                ref={(el) => {
                                    editInputRef.current[task.id] = el;
                                }}
                                defaultValue={task.text}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        saveEdit(task.id);
                                    }
                                }}
                            />

                            <button onClick={() => saveEdit(task.id)}>
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{task.text}</span>

                            <button onClick={() => startEdit(task.id)}>
                                Edit
                            </button>

                            <button onClick={() => deleteTask(task.id)}>
                                Delete
                            </button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
}

export default AdvancedFocus;