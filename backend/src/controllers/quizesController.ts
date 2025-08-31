import { Request, Response } from "express";
import { IGetAllQuizesQuery } from "../types/query-params";
import { Quiz } from "../models/quiz";
import { QuizResponseDto } from "../dtos/quizes/QuizResponse.dto";
import { IIdParam } from "../types/params";
import AppError from "../utils/AppError";
import { CreateQuizDto } from "../dtos/quizes/CreateQuiz.dto";
import { QuizService } from "../services/quizService";

export const getAllQuizes = async (
  req: Request<{}, {}, {}, IGetAllQuizesQuery>,
  res: Response<QuizResponseDto[]>
) => {
  const { q } = req.query;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  const startIndex = (page - 1) * limit;

  const quizes = await QuizService.getQuizes(startIndex, limit, q);
  res.status(200).send(quizes);
};

export const getSingleQuiz = async (
  req: Request<IIdParam>,
  res: Response<QuizResponseDto>
) => {
  const { id } = req.params;

  const quiz = await QuizService.getQuiz(id);

  if (quiz) {
    res.status(200).send(quiz);
  } else {
    throw new AppError("Quiz isn't found", 404);
  }
};

export const createQuiz = async (
  req: Request<{}, {}, CreateQuizDto>,
  res: Response<QuizResponseDto>
) => {
  const { title, description, questions, authorId } = req.body;

  const quiz = await QuizService.createQuiz({
    title,
    description,
    questions,
    authorId,
  });

  if (quiz) {
    res.status(201).send(quiz);
  } else {
    throw new AppError("Quiz creation failed", 500);
  }
};
