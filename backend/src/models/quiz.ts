import mongoose, { Model, Document, Schema, Types } from "mongoose";

export interface IOption {
  title: string;
  selectionsCount: number;
  isCorrect: boolean;
}

export interface IQuestion {
  title: string;
  type: "single" | "multiple";
  options: IOption[];
}

export interface ICompletion {
  milliseconds: number;
  score: number;
  completorId: Types.ObjectId;
}

export interface IQuiz {
  title: string;
  description: string;
  questions: IQuestion[];
  authorId: Types.ObjectId;
  completions: ICompletion[];
}

export interface IQuizMethods {
  getQuestionsCount(): number;
  getCompletionsCount(): number;
  getAverageCompletionTime(): number;
}

const optionSchema = new mongoose.Schema<IOption>({
  title: {
    type: String,
    required: true,
  },
  selectionsCount: Number,
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const questionSchema = new mongoose.Schema<IQuestion>({
  title: {
    type: String,
    required: true,
  },
  options: [optionSchema],
});

const completionSchema = new mongoose.Schema<ICompletion>({
  milliseconds: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  completorId: Schema.Types.ObjectId,
});

const quizSchema = new mongoose.Schema<IQuiz, Model<IQuiz>, IQuizMethods>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    questions: [questionSchema],
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    completions: {
      type: [completionSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

quizSchema.methods.getQuestionsCount = function () {
  return this.questions.length;
};

quizSchema.methods.getCompletionsCount = function () {
  return this.completions.length;
};

quizSchema.methods.getAverageCompletionTime = function () {
  return this.completions.reduce((acc, el, _, arr) => {
    return acc + el.milliseconds / arr.length;
  }, 0);
};

export const Quiz = mongoose.model("Quiz", quizSchema);
