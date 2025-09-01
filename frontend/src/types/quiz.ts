export interface IOption {
  id: string;
  title: string;
}

export interface IQuestion {
  id: string;
  title: string;
  optionId: string;
}

export interface IQuiz {
  id: string;
  title: string;
  description: string;
  authorId: string;
  questionsCount: number;
}

interface ICreateOption {
  title: string;
}

interface ICreateQuestion extends Omit<IQuestion, "id"> {
  options: ICreateOption[];
}

export interface ICreateQuiz
  extends Omit<IQuiz, "id" | "questions" | "completionsCount"> {
  questions: ICreateQuestion[];
}
