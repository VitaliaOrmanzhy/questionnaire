import { Button } from "@chakra-ui/react";

interface SubmitButtonProps {
  disabled?: boolean;
  onClick: () => void;
  children: string;
}

const SubmitButton = ({ disabled, onClick, children }: SubmitButtonProps) => {
  return (
    <Button disabled={disabled} onClick={onClick} type="submit">
      {children}
    </Button>
  );
};

export default SubmitButton;
