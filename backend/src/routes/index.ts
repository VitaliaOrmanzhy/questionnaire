import { Router } from "express";
import authRouter from "./authRoutes";
import quizesRouter from "./quizesRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/quizes", quizesRouter);

export default router;