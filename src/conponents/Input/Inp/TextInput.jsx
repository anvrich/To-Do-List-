import "../Input.css";

export default function TextInput({ text, setText }) {
    return (
        <input
            type="text"
            className="input-field"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите задачу..."
        />
    );
}
