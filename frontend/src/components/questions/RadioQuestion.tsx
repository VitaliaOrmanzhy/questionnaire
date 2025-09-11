import { HStack, RadioCard } from "@chakra-ui/react";
import type { IOptionsQuestion } from "@/types/quiz";
import type {
  IRadioAnswer,
  TAnswerPayload,
  TOnAnswerChange,
} from "@/types/answer";
import RadioOption from "./RadioOption";

interface IOptionsQuestionProps {
  question: IOptionsQuestion;
  initialState?: IRadioAnswer;
  onChange: TOnAnswerChange;
}

const RadioQuestion = ({
  question,
  initialState,
  onChange,
}: IOptionsQuestionProps) => {
  const handleChange = (value: string | null) => {
    if (value) {
      const answer: TAnswerPayload = {
        questionId: question.id,
        type: "checkbox",
        value,
      };
      onChange(answer);
    }
  };
  return (
    <RadioCard.Root
      value={initialState?.optionId}
      onValueChange={(e) => handleChange(e.value)}
    >
      <RadioCard.Label>Select framework</RadioCard.Label>
      <HStack>
        {question.options.map((el) => (
          <RadioOption key={el.id} label={el.title} value={el.id} />
        ))}
      </HStack>
    </RadioCard.Root>
  );
};

export default RadioQuestion;
