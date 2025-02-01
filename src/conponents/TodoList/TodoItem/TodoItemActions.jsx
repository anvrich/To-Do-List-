export default function TodoItemActions({ isEditing, onSave, onEdit, onDelete , onShowDetails}) {
    return (
        <div>
            {isEditing ? (
                <button onClick={onSave}>💾</button>
            ) : (
                <button onClick={onEdit}>🖍</button>
            )}
            <button onClick={onShowDetails}>ℹ️</button> {/* Новая кнопка */}
            <button onClick={onDelete}>🗑</button>
        </div>
    );
}
