import { Request, Response } from "express";
import { IGetAllQuizesQuery } from "../types/query-params";
import { Quiz } from "../models/quiz";
import { QuizResponseDto } from "../dtos/quizes/QuizResponse.dto";

export const getAllQuizes = async (req: Request<{}, {}, {}, IGetAllQuizesQuery>, res: Response<QuizResponseDto>) => {
    const { q } = req.query;
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;

    const startIndex = (page - 1) * limit;

    const quizes = await Quiz.getQuizes(page, limit, q);

    res.status(200).send(quizes);
}