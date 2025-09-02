import { CreateOptionDto } from "./CreateOption.dto";

export interface CreateQuestionDto {
  title: string;
  optionIndex: number;
  options: CreateOptionDto[];
}
