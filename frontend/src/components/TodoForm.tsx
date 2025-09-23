import { useState } from "react";

interface Props {
    onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter todo..."
                className="border p-2 flex-1"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
}
