import mongoose, { Document } from "mongoose";

export interface IOption {
  title: string;
  selectionsCount: number;
  isCorrect: boolean;
}

export const optionSchema = new mongoose.Schema<IOption>({
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
