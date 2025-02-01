import {useState} from "react";
import TextInput from "./Inp/TextInput.jsx";
import DateInput from "./Inp/DateInput.jsx";
import DescriptionInput from "./Inp/DescriptionInput.jsx";
import "./Input.css"

export default function TodoInput({addTask}) {
    const [text, setText] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTask = () => {
        if (text.trim() !== "") {
            addTask({
                text,
                dueDate,
                description,
                completed: false,
            });
            setText("");
            setDueDate("");
            setDescription("");
        }
    };

    return (
        <div className="todo-input">
            <TextInput text={text} setText={setText}/>
            <DateInput dueDate={dueDate} setDueDate={setDueDate}/>
            <DescriptionInput description={description} setDescription={setDescription}/>
            <button className="input-button" onClick={handleAddTask}>➕</button>
        </div>
    );
}