import { useState, useEffect } from "react";
import "./TaskDetails.css";

export default function TaskDetails({ selectedTask, onClose, updateTask }) {
    if (!selectedTask) return null;

    // Загружаем подзадачи из объекта задачи
    const [subtasks, setSubtasks] = useState(selectedTask.subtasks || []);
    const [subtaskText, setSubtaskText] = useState("");

    useEffect(() => {
        // Обновляем задачу в общем списке при изменении подзадач
        updateTask(selectedTask.id, { subtasks });
    }, [subtasks]);

    const addSubtask = () => {
        if (subtaskText.trim() !== "") {
            const newSubtask = { id: Date.now(), text: subtaskText, completed: false };
            setSubtasks([...subtasks, newSubtask]);
            setSubtaskText("");
        }
    };

    const toggleSubtask = (id) => {
        setSubtasks(subtasks.map(subtask =>
            subtask.id === id ? { ...subtask, completed: !subtask.completed } : subtask
        ));
    };

    const deleteSubtask = (id) => {
        setSubtasks(subtasks.filter(subtask => subtask.id !== id));
    };

    return (
        <div className="task-details">
            <h3>📌 Детали задачи</h3>
            <p><strong>Задача:</strong> {selectedTask.text}</p>
            {selectedTask.dueDate && <p><strong>📅 Дата:</strong> {selectedTask.dueDate}</p>}
            {selectedTask.description && <p><strong>📝 Описание:</strong> {selectedTask.description}</p>}
            <p><strong>Статус:</strong> {selectedTask.completed ? "✅ Выполнена" : "⏳ В процессе"}</p>

            {/* 🔹 Ввод новой подзадачи */}
            <div className="subtask-input">
                <input
                    type="text"
                    value={subtaskText}
                    onChange={(e) => setSubtaskText(e.target.value)}
                    placeholder="Добавить подзадачу..."
                />
                <button onClick={addSubtask}>➕</button>
            </div>

            {/* 🔹 Список подзадач */}
            {subtasks.length > 0 && (
                <ul className="subtask-list">
                    {subtasks.map(subtask => (
                        <li key={subtask.id} className={`subtask-item ${subtask.completed ? "completed" : ""}`}>
                            <input
                                type="checkbox"
                                className="subtask-checkbox"
                                checked={subtask.completed}
                                onChange={() => toggleSubtask(subtask.id)}
                            />
                            <span>{subtask.text}</span>
                            <button onClick={() => deleteSubtask(subtask.id)}>🗑</button>
                        </li>
                    ))}
                </ul>
            )}

            <button className="close-btn" onClick={onClose}>❌ Закрыть</button>
        </div>
    );
}
