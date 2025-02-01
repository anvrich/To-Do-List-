import {useState} from "react";
import TodoItemActions from "./TodoItemActions.jsx";
import "./TodoItem.css"
export default function TodoItem({task, deleteTask, toggleComplete, editTask, showTaskDetails}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleSave = () => {
        if (newText.trim()) {
            editTask(task.id, newText);
            setIsEditing(false);
        }
    };

    return (
        <li className={`todo-item ${task.completed ? "completed" : ""}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                    autoFocus
                />
            ) : (
                <>
                    <span onClick={() => toggleComplete(task.id)}>
                    {task.completed ? "✅ " : "❌ "} {task.text}
                     </span>
                    {task.dueDate && <p className="task-date">📅 {task.dueDate}</p>}
                </>

            )}

            <TodoItemActions
                isEditing={isEditing}
                onSave={handleSave}
                onEdit={() => setIsEditing(true)}
                onDelete={() => deleteTask(task.id)}
                onShowDetails={() => showTaskDetails(task)}
            />
        </li>
    );
}
