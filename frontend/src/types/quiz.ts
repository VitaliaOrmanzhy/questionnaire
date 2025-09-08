export interface IOption {
  id: string;
  title: string;
}

interface IBaseQuestion {
  id: string;
  title: string;
}

export interface ITextQuestion extends IBaseQuestion {
  type: "text";
  placeholder: string;
  maxAnswerLength?: number;
}

export interface IOptionsQuestion extends IBaseQuestion {
  type: "radio" | "checkbox";
  options: IOption[];
}

export interface IImageQuestion extends IBaseQuestion {
  type: "image";
}

export type TQuestion = ITextQuestion | IOptionsQuestion | IImageQuestion;

export interface IQuiz {
  id: string;
  title: string;
  description: string;
  author: {
    id: string;
    username: string;
  };
  questionsCount: number;
}

interface ICreateOption {
  title: string;
  isCorrect: boolean;
}

interface ICreateQuestion extends Omit<TQuestion, "id" | "options"> {
  options: ICreateOption[];
}

export interface ICreateQuiz
  extends Omit<IQuiz, "id" | "questions" | "completionsCount"> {
  questions: ICreateQuestion[];
}

export interface IQuizQueryParams {
  q: string | null;
  limit?: number;
}

interface ICompletorInfo {
  id: string;
  username: string;
  score: number;
  milliseconds: number;
}

export type TCompletorsInfo = ICompletorInfo[];

export interface IQuizStatistics {
  averageCompletionTime?: number;
  completionsCount: number;
  completors: TCompletorsInfo;
}
