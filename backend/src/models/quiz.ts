import mongoose, {
  Model,
  Document,
  Schema,
  Types,
  PopulatedDoc,
} from "mongoose";
import { IUserDocument } from "./user";

export interface IOption {
  title: string;
  selectionsCount: number;
  isCorrect: boolean;
}

interface IOptionDocument extends IOption, Document {
  _id: Types.ObjectId;
}

export interface IQuestion {
  title: string;
  type: "single" | "multiple";
  options: IOption[];
}

interface IQuestionDocument extends IQuestion, Document {
  options: Types.DocumentArray<IOptionDocument>;
}

export interface ICompletion {
  milliseconds: number;
  score: number;
  completor: PopulatedDoc<Types.ObjectId & IUserDocument>;
}

interface ICompletionDocument extends ICompletion, Document {
  _id: Types.ObjectId;
}

export interface IQuiz {
  title: string;
  description: string;
  questions: IQuestion[];
  author: PopulatedDoc<Types.ObjectId & IUserDocument>;
  completions: ICompletion[];
}

interface IQuizDocument extends IQuiz, Document {
  _id: Types.ObjectId;
  questions: Types.DocumentArray<IQuestionDocument>;
  completions: Types.DocumentArray<ICompletionDocument>;
  getQuestionsCount(): number;
  getCompletionsCount(): number;
  getAverageCompletionTime(): number;
}

// export interface IQuizMethods {
//   getQuestionsCount(): number;
//   getCompletionsCount(): number;
//   getAverageCompletionTime(): number;
// }

const optionSchema = new mongoose.Schema<IOptionDocument>({
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

const questionSchema = new mongoose.Schema<IQuestionDocument>({
  title: {
    type: String,
    required: true,
  },
  options: [optionSchema],
});

const completionSchema = new mongoose.Schema<ICompletionDocument>(
  {
    milliseconds: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    completor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const quizSchema = new mongoose.Schema<
  IQuizDocument,
  Model<IQuizDocument>
  //   IQuizMethods
>(
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
    author: {
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

quizSchema.methods.getQuestionsCount = function (this: IQuizDocument) {
  return this.questions.length;
};

quizSchema.methods.getCompletionsCount = function (this: IQuizDocument) {
  return this.completions.length;
};

quizSchema.methods.getAverageCompletionTime = function (this: IQuizDocument) {
  return this.completions.reduce((acc, el, _, arr) => {
    return acc + el.milliseconds / arr.length;
  }, 0);
};

export const Quiz = mongoose.model<IQuizDocument, Model<IQuizDocument>>(
  "Quiz",
  quizSchema
);
