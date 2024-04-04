import express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthinticated } from "../Middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthinticated , newTask);

router.get("/my", isAuthinticated , getMyTask);

router.route("/:id").put(isAuthinticated, updateTask).delete(isAuthinticated, deleteTask);

export default router;