import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/apiResponse";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error("❌ Error:", err);

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json(
        errorResponse(err.message || "Server Error", statusCode)
    );
};
