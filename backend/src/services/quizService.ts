import { CreateQuizDto } from "../dtos/quizes/CreateQuiz.dto";
import { QuizResponseDto } from "../dtos/quizes/QuizResponse.dto";
import { Quiz } from "../models/quiz";

export class QuizService {
  static async getQuizes(
    startIndex: number,
    limit: number,
    q?: string
  ): Promise<QuizResponseDto[]> {
    const quizes = await Quiz.find(
      q
        ? {
            $or: [
              { title: { $regex: q, $options: "i" } },
              { author: { $regex: q, $options: "i" } },
              { description: { $regex: q, $options: "i" } },
            ],
          }
        : {}
    )
      .skip(startIndex)
      .limit(limit)
      .select("title description authorId questions");

    return quizes.map((el) => ({
      _id: el._id.toString(),
      title: el.title,
      description: el.description,
      authorId: el.authorId.toString(),
      questionsCount: el.getQuestionsCount(),
    }));
  }

  static async getQuiz(id: string): Promise<QuizResponseDto | null> {
    return await Quiz.findOne({ _id: id }).select(
      "title description authorId completionsCount"
    );
  }

  static async createQuiz({
    title,
    description,
    questions,
    authorId,
  }: CreateQuizDto): Promise<QuizResponseDto | null> {
    const quiz = await Quiz.create({ title, description, questions, authorId });

    if (quiz) {
      return {
        _id: quiz._id.toString(),
        title: quiz.title,
        description: quiz.description,
        authorId: quiz.authorId.toString(),
        questionsCount: quiz.getQuestionsCount(),
      };
    } else {
      return null;
    }
  }
}
