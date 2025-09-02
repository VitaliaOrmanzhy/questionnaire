import { Router } from "express";
import {
  createQuiz,
  getAllQuizzes,
  getSingleQuiz,
} from "../controllers/quizesController";
import authMiddleware from "../middlewares/authMiddleware";

const quizzesRouter = Router();

quizzesRouter.get("/", getAllQuizzes);
quizzesRouter.get("/:id", getSingleQuiz);
quizzesRouter.post("/create", authMiddleware, createQuiz);
quizzesRouter;

export default quizzesRouter;
