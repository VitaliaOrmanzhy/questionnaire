import { CreateQuestionDto } from "./CreateQuestion.dto";

export interface CreateQuizDto {
  title: string;
  description: string;
  questions: CreateQuestionDto[];
  authorId?: string;
}
