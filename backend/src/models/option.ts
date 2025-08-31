import mongoose, { Document } from "mongoose";

export interface IOption {
    title: string;
    selectionsCount: number;
}

export const optionSchema = new mongoose.Schema<IOption>({
    title: {
        type: String,
        required: true,
    },
    selectionsCount: Number
})