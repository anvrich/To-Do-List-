import {useState, useEffect} from "react";
import TodoInput from "./Input/TodoInput.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import ProgressBar from "./UI/ProgressBar.jsx";
import TaskDetails from "./TodoList/TaskDetalis/TaskDetails.jsx";

export default function TodoApp() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [filter, setFilter] = useState("all");
    const [selectedTask, setSelectedTask] = useState(null);
    const showTaskDetails = (task) => {
        setSelectedTask(task);
    };

    const closeTaskDetails = () => {
        setSelectedTask(null);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = ({text, dueDate, description}) => {
        const newTask = {
            id: Date.now(),
            text,
            dueDate,
            description,
            completed: false,
            subtasks: []
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const deleteAllTasks = () => {
        setTasks([]);
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });
    const editTask = (id, newText) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, text: newText} : task
        ));
    };
    const updateTask = (id, updatedData) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, ...updatedData} : task
        ));
    };

    return (
        <div className="todo-wrapper">
            <div className="todo-left">
                <h2 className="todo-title">⏳ Маленькие шаги — большие победы</h2>
                <TodoInput addTask={addTask}/>

                <div className="filter-container">
                    <button className={`filter-btn ${filter === "all" ? "active" : ""}`}
                            onClick={() => setFilter("all")}>📌 Все
                    </button>
                    <button className={`filter-btn ${filter === "active" ? "active" : ""}`}
                            onClick={() => setFilter("active")}>🔄 Активные
                    </button>
                    <button className={`filter-btn ${filter === "completed" ? "active" : ""}`}
                            onClick={() => setFilter("completed")}>✅ Выполненные
                    </button>
                </div>
                {tasks.length > 0 && (
                    <button onClick={deleteAllTasks} className="delete-all-btn">🗑 Очистить список</button>
                )}
            </div>

            <div className="todo-right">
                <ProgressBar tasks={tasks}/>
                <TodoList tasks={filteredTasks}
                          deleteTask={deleteTask}
                          toggleComplete={toggleComplete}
                          editTask={editTask}
                          showTaskDetails={showTaskDetails}
                />
            </div>
            {selectedTask &&
                <TaskDetails selectedTask={selectedTask}
                             onClose={closeTaskDetails}
                             updateTask={updateTask} // Передаем функцию обновления
                />}
        </div>
    );
}
