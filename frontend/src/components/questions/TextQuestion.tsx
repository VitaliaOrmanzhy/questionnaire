import type {
  ITextAnswer,
  TAnswerPayload,
  TOnAnswerChange,
} from "@/types/answer";
import type { ITextQuestion } from "@/types/quiz";
import { Box, Input, Text } from "@chakra-ui/react";

interface ITextQuestionProps {
  question: ITextQuestion;
  initialState: ITextAnswer;
  onChange: TOnAnswerChange;
}

const TextQuestion = ({
  question,
  initialState,
  onChange,
}: ITextQuestionProps) => {
  const handleChange = (value: string) => {
    const answer: TAnswerPayload = {
      questionId: question.id,
      type: "text",
      value,
    };
    onChange(answer);
  };
  return (
    <Box>
      <Text>{question.title}</Text>
      <Input
        onChange={(e) => handleChange(e.target.value)}
        placeholder={question.placeholder}
        value={initialState.text}
      />
    </Box>
  );
};

export default TextQuestion;
