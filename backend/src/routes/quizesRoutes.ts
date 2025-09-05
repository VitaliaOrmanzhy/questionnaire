import { Router } from "express";
import {
  createQuiz,
  getAllQuizzes,
  getQuizStatistics,
  getSingleQuiz,
} from "../controllers/quizzesController";
import authMiddleware from "../middlewares/authMiddleware";

const quizzesRouter = Router();

quizzesRouter.get("/", getAllQuizzes);
quizzesRouter.get("/:id/statistics", getQuizStatistics);
quizzesRouter.get("/:id", getSingleQuiz);
quizzesRouter.post("/create", authMiddleware, createQuiz);

export default quizzesRouter;
