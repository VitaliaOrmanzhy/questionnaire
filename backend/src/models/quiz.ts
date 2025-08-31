import mongoose, { Model, Document, Schema, Types } from "mongoose";
import { IQuestion, questionSchema } from "./question";

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
}

const quizSchema = new mongoose.Schema<IQuiz, Model<IQuiz>, IQuizMethods>({
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
        required: true
    },
    completionsCount: {
        type: Number,
        required: true
    },
    averageCompletionTime: Number,
})

quizSchema.methods.getQuestionsCount = function() {
    return this.questions.length;
}

export const Quiz = mongoose.model("Quiz", quizSchema);
