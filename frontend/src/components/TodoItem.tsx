interface Props {
    todo: { _id: string; text: string; completed: boolean };
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <div className="flex items-center justify-between border-b py-2">
            <span
                onClick={() => onToggle(todo._id, !todo.completed)}
                className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
                {todo.text}
            </span>
            <button
                onClick={() => onDelete(todo._id)}
                className="text-red-500 hover:underline"
            >
                Delete
            </button>
        </div>
    );
}
