import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api/todos",
});

export const getTodos = () => API.get("/");
export const createTodo = (text: string) => API.post("/", { text });
export const updateTodo = (id: string, data: any) => API.put(`/${id}`, data);
export const deleteTodo = (id: string) => API.delete(`/${id}`);
