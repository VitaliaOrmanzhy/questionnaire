import { CheckboxCard } from "@chakra-ui/react";

interface ICheckboxOptionProps {
  value: string;
  label: string;
  isChecked: boolean;
  onChange: (value: string) => void;
}

const CheckboxOption = ({
  value,
  label,
  isChecked,
  onChange,
}: ICheckboxOptionProps) => {
  return (
    <CheckboxCard.Root maxW="240px" checked={isChecked}>
      <CheckboxCard.HiddenInput onChange={() => onChange(value)} />
      <CheckboxCard.Control>
        <CheckboxCard.Label>{label}</CheckboxCard.Label>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  );
};

export default CheckboxOption;
