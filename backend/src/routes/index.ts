import { Router } from "express";
import authRouter from "./authRoutes";
import quizzesRouter from "./quizesRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/quizes", quizzesRouter);

export default router;
