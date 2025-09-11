import { RadioCard } from "@chakra-ui/react";

interface IRadioOptionProps {
  value: string;
  label: string;
}

const RadioOption = ({ label, value }: IRadioOptionProps) => {
  return (
    <RadioCard.Item value={value}>
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemText>{label}</RadioCard.ItemText>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>
    </RadioCard.Item>
  );
};

export default RadioOption;
