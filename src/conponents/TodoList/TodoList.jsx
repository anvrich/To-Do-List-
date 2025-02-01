import TodoItem from "./TodoItem/TodoItem.jsx";
import "./List.css"

export default function TodoList({ tasks, deleteTask , toggleComplete, editTask, showTaskDetails}) {
    return (
        <ul className="todo-list">
            {tasks.length === 0 ?(
                <p className="noList">Нет задач</p>
            ) :(
                tasks.map((task, index) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                        showTaskDetails={showTaskDetails}
                    />
                ))
            )}
        </ul>
    );
}

