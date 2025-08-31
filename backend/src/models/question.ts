import mongoose, { Schema, Types } from "mongoose";
import { optionSchema, IOption } from "./option";

export interface IQuestion {
    title: string;
    optionId: Types.ObjectId;
    options: IOption[];
}

export const questionSchema = new mongoose.Schema<IQuestion>({
    title: {
        type: String,
        required: true,
    },
    optionId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    options: [optionSchema],
})