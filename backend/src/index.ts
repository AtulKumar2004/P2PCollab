import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes"
import postRoutes from "./routes/post.route"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser()); 
app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes)

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
})