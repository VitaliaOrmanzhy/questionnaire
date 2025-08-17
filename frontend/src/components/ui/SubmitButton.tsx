import { Button } from "@chakra-ui/react";

interface SubmitButtonProps {
  label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps) => {
  return <Button type="submit">{label}</Button>;
};

export default SubmitButton;
