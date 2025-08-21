import { Flex } from "@chakra-ui/react";
import SubmitButton from "./SubmitButton";

interface SumbitButtonWrapperProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const SumbitButtonWrapper = ({
  label,
  disabled,
  onClick,
}: SumbitButtonWrapperProps) => {
  console.log(onClick);
  return (
    <Flex justifyContent="flex-end" m="2rem 0 1rem 0">
      <SubmitButton disabled={disabled} onClick={onClick}>
        {label}
      </SubmitButton>
    </Flex>
  );
};

export default SumbitButtonWrapper;
