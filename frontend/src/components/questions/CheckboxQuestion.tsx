import { CheckboxGroup, HStack } from "@chakra-ui/react";
import type { IOptionsQuestion } from "@/types/quiz";
import type {
  ICheckboxAnswer,
  TAnswerPayload,
  TOnAnswerChange,
} from "@/types/answer";
import CheckboxOption from "./CheckboxOption";

interface IOptionsQuestionProps {
  question: IOptionsQuestion;
  initialState?: ICheckboxAnswer;
  onChange: TOnAnswerChange;
}

const OptionsQuestion = ({
  question,
  initialState,
  onChange,
}: IOptionsQuestionProps) => {
  const handleChange = (value: string) => {
    const answer: TAnswerPayload = {
      questionId: question.id,
      type: "checkbox",
      value,
    };
    onChange(answer);
  };

  return (
    <CheckboxGroup>
      <HStack>
        {question.options &&
          question.options.map((el) => (
            <CheckboxOption
              key={el.id}
              label={el.title}
              value={el.id}
              isChecked={Boolean(initialState?.optionsIds.includes(el.id))}
              onChange={handleChange}
            />
          ))}
      </HStack>
    </CheckboxGroup>
  );
};

export default OptionsQuestion;
