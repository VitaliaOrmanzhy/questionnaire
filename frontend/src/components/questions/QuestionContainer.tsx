import { Box } from "@chakra-ui/react";
import type { TQuestion } from "@/types/quiz";
import CheckboxQuestion from "./CheckboxQuestion";
import type {
  ICheckboxAnswer,
  IImageAnswer,
  IRadioAnswer,
  ITextAnswer,
  TAnswer,
  TOnAnswerChange,
} from "@/types/answer";
import RadioQuestion from "./RadioQuestion";
import TextQuestion from "./TextQuestion";
import ImageQuestion from "./ImageQuestion";

interface IQuestionProps {
  question: TQuestion;
  initialState?: TAnswer;
  onChange: TOnAnswerChange;
}

const Question = ({ question, initialState, onChange }: IQuestionProps) => {
  return (
    <Box>
      {question && question.type === "checkbox" && (
        <CheckboxQuestion
          question={question}
          initialState={initialState as ICheckboxAnswer}
          onChange={onChange}
        />
      )}
      {question && question.type === "radio" && (
        <RadioQuestion
          question={question}
          initialState={initialState as IRadioAnswer}
          onChange={onChange}
        />
      )}
      {question && question.type === "text" && (
        <TextQuestion
          question={question}
          initialState={initialState as ITextAnswer}
          onChange={onChange}
        />
      )}
      {question && question.type === "image" && (
        <ImageQuestion
          question={question}
          initialState={initialState as IImageAnswer}
          onChange={onChange}
        />
      )}
    </Box>
  );
};

export default Question;
