import { Quiz } from "./../models/quiz";
import { CreateQuizDto } from "../dtos/quizes/CreateQuiz.dto";
import { QuizResponseDto } from "../dtos/quizes/QuizResponse.dto";
import {
  QuizStatisticsResponseDto,
  TCompletorsInfo,
} from "../dtos/quizes/QuizStatisticsResponse.dto";

export class QuizService {
  static async getQuizzesData(
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
      .populate("author", "username")
      .select("title description author questions");

    return quizes.map((el) => {
      return {
        id: el._id.toString(),
        title: el.title,
        description: el.description,
        author: {
          id: el.author?._id.toString()!,
          username: el.author?.username!,
        },
        questionsCount: el.getQuestionsCount(),
      };
    });
  }

  static async getQuizData(id: string): Promise<QuizResponseDto | null> {
    return await Quiz.findById(id).select(
      "title description authorId completionsCount"
    );
  }

  static async getQuizStatisticsData(
    id: string
  ): Promise<QuizStatisticsResponseDto | null> {
    const quiz = await Quiz.findById(id).populate(
      "completions.completor",
      "username"
    );

    if (quiz) {
      const { completions } = quiz;
      const averageCompletionTime = quiz.getAverageCompletionTime();
      const completionsCount = quiz.getCompletionsCount();

      const completors = completions.reduce<TCompletorsInfo>((acc, el) => {
        const completorUsername = el.completor?.username;
        if (completorUsername) {
          acc.push({
            username: completorUsername,
            milliseconds: el.milliseconds,
            score: el.score,
          });
        }
        return acc;
      }, []);

      return {
        averageCompletionTime,
        completionsCount,
        completors,
      };
    } else {
      return null;
    }
  }

  static async createQuiz({
    title,
    description,
    questions,
    authorId,
  }: CreateQuizDto & { authorId?: string }): Promise<QuizResponseDto | null> {
    const quiz = await Quiz.create({
      title,
      description,
      questions,
      author: authorId,
    });
    await quiz.populate("author", "username");

    if (quiz) {
      return {
        id: quiz._id.toString(),
        title: quiz.title,
        description: quiz.description,
        author: {
          id: quiz.author?._id.toString()!,
          username: quiz.author?.username!,
        },
        questionsCount: quiz.getQuestionsCount(),
      };
    } else {
      return null;
    }
  }
}
