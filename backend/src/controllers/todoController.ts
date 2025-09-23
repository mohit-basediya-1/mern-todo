import { Request, Response } from "express";
import Todo from "../models/Todo";
import { successResponse } from "../utils/apiResponse";
import { asyncHandler } from "../middleware/asyncHandler";

export const getTodos = asyncHandler(async (req: Request, res: Response) => {
    const todos = await Todo.find();
    res.json(successResponse(todos, "Todos fetched"));
});

export const createTodo = asyncHandler(async (req: Request, res: Response) => {
    const { text } = req.body;
    const todo = new Todo({ text });
    await todo.save();
    res.status(201).json(successResponse(todo, "Todo created"));
});

export const updateTodo = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(successResponse(todo, "Todo updated"));
});

export const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json(successResponse(null, "Todo deleted"));
});
