import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/todos`,
});

export const getTodos = () => API.get("/");
export const createTodo = (text: string) => API.post("/", { text });
export const updateTodo = (id: string, data: any) => API.put(`/${id}`, data);
export const deleteTodo = (id: string) => API.delete(`/${id}`);
