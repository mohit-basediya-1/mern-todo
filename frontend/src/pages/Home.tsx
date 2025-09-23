import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Home() {
    const [todos, setTodos] = useState<any[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const { data } = await getTodos();
        setTodos(data.data);
    };

    const handleAdd = async (text: string) => {
        await createTodo(text);
        fetchTodos();
    };

    const handleEdit = async (id: string, text: string) => {
        await updateTodo(id, { text });
        fetchTodos();
    };

    const handleToggle = async (id: string, completed: boolean) => {
        await updateTodo(id, { completed });
        fetchTodos();
    };

    const handleDelete = async (id: string) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">✅ Todo List</h1>
            <TodoForm onAdd={handleAdd} />
            <div className="mt-4">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </div>
    );
}
