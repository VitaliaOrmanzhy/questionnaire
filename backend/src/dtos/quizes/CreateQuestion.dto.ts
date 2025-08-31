import { CreateOptionDto } from "./CreateOption.dto";

export interface CreateQuestionDto {
    title: string;
    optionId: string;
    options: CreateOptionDto[];
}