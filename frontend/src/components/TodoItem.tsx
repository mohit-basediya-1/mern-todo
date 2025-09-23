import { useState } from "react";

interface Props {
    todo: { _id: string; text: string; completed: boolean };
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleSave = () => {
        if (newText.trim() && newText !== todo.text) {
            onEdit(todo._id, newText);
        }
        setIsEditing(false);
    };

    return (
        <div className="flex items-center justify-between border-b py-2">
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                    className="border p-1 flex-1 mr-2"
                    autoFocus
                />
            ) : (
                <span
                    onClick={() => onToggle(todo._id, !todo.completed)}
                    className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""
                        }`}
                >
                    {todo.text}
                </span>
            )}

            <div className="flex gap-2">
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-blue-500 hover:underline"
                    >
                        Edit
                    </button>
                )}
                <button
                    onClick={() => onDelete(todo._id)}
                    className="text-red-500 hover:underline"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
