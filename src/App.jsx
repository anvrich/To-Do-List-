import'./App.css'
import TodoApp from "./conponents/TodoApp.jsx";

export default function App(){
    return (
        <div className="container">
            <h1>📌 To-Do List</h1>
            <TodoApp />
        </div>
    )
}