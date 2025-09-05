import { Request, Response } from "express";
import { IGetAllQuizesQuery } from "../types/query-params";
import { Quiz } from "../models/quiz";
import { QuizResponseDto } from "../dtos/quizes/QuizResponse.dto";
import { IIdParam } from "../types/params";
import AppError from "../utils/AppError";
import { CreateQuizDto } from "../dtos/quizes/CreateQuiz.dto";
import { QuizService } from "../services/quizService";
import { IAuthenticateRequest } from "../types/request";
import { QuizStatisticsResponseDto } from "../dtos/quizes/QuizStatisticsResponse.dto";

export const getAllQuizzes = async (
  req: Request<{}, {}, {}, IGetAllQuizesQuery>,
  res: Response<QuizResponseDto[]>
) => {
  const { q } = req.query;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  const startIndex = (page - 1) * limit;

  const quizes = await QuizService.getQuizzesData(startIndex, limit, q);
  res.status(200).send(quizes);
};

export const getSingleQuiz = async (
  req: Request<IIdParam>,
  res: Response<QuizResponseDto>
) => {
  const { id } = req.params;

  const quiz = await QuizService.getQuizData(id);

  if (quiz) {
    res.status(200).send(quiz);
  } else {
    throw new AppError("Quiz isn't found", 404);
  }
};

export const createQuiz = async (
  req: IAuthenticateRequest<{}, CreateQuizDto>,
  res: Response<QuizResponseDto>
) => {
  const authorId = req.user?._id as string;
  const { title, description, questions } = req.body;

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

export const getQuizStatistics = async (
  req: Request<IIdParam>,
  res: Response<QuizStatisticsResponseDto>
) => {
  const { id } = req.params;

  if (id) {
    const quizStatistics = await QuizService.getQuizStatisticsData(id);
    if (!quizStatistics) {
      throw new AppError("Couldn't find quiz statistics", 404);
      return;
    }
    res.status(200).send(quizStatistics);
  }
};
