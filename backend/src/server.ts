import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";
import connectDB from "./config/db";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("🚀 Backend running!"));
app.use("/api/todos", todoRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

connectDB(process.env.MONGO_URI as string);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
