export interface IBaseAnswer {
  questionId: string;
}

export interface ITextAnswer extends IBaseAnswer {
  type: "text";
  text: string;
}

export interface IRadioAnswer extends IBaseAnswer {
  type: "radio";
  optionId: string;
}

export interface ICheckboxAnswer extends IBaseAnswer {
  type: "checkbox";
  optionsIds: string[];
}

export interface IImageAnswer extends IBaseAnswer {
  type: "image";
  image: File;
}

export interface IOptionsAnswer extends IBaseAnswer {
  optionsIds: string[];
}

export type TAnswer =
  | ITextAnswer
  | IImageAnswer
  | ICheckboxAnswer
  | IRadioAnswer;

export type TAnswerPayload = Pick<TAnswer, "questionId" | "type"> & {
  value: string | File;
};

export type TOnAnswerChange = (answer: TAnswerPayload) => void;
