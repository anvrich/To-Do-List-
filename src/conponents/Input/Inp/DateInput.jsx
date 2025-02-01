import "../Input.css";

export default function DateInput({ dueDate, setDueDate }) {
    return (
        <input
            type="date"
            className="input-field"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
        />
    );
}
