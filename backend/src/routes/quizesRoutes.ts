import { Router } from "express";
import { createQuiz, getAllQuizes, getSingleQuiz } from "../controllers/quizesController";
import authMiddleware from "../middlewares/authMiddleware";

const quizesRouter = Router();

quizesRouter.get("/", getAllQuizes);
quizesRouter.get("/:id", getSingleQuiz);
quizesRouter.post("/create", authMiddleware, createQuiz);

export default quizesRouter;