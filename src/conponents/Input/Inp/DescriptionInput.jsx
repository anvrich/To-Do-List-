import "../Input.css";

export default function DescriptionInput({description, setDescription}) {
    return (
        <input
            type="text"
            className="input-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Добавьте описание..."
        />
    );
}
