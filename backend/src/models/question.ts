import mongoose, { Schema, Types } from "mongoose";
import { optionSchema, IOption } from "./option";

export interface IQuestion {
  title: string;
  type: "single" | "multiple";
  options: IOption[];
}

export const questionSchema = new mongoose.Schema<IQuestion>({
  title: {
    type: String,
    required: true,
  },
  options: [optionSchema],
});
