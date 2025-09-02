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

export interface IQuiz {
  title: string;
  description: string;
  questions: IQuestion[];
  authorId: Types.ObjectId;
  completionsCount: number;
  averageCompletionTime?: number;
}

export interface IQuizMethods {
  getQuestionsCount(): number;
  increaseCompletionsCount(): number;
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
    completionsCount: {
      type: Number,
      default: 0,
      required: true,
    },
    averageCompletionTime: Number,
  },
  {
    timestamps: true,
  }
);

quizSchema.methods.getQuestionsCount = function () {
  return this.questions.length;
};

quizSchema.methods.increaseCompletionsCount = function () {
  return ++this.completionsCount;
};

export const Quiz = mongoose.model("Quiz", quizSchema);
