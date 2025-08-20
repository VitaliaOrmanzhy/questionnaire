import { Field as ChakraField } from "@chakra-ui/react";

interface FormFieldWrapperProps {
  name: string;
  title: string;
  error?: boolean;
  children: React.ReactNode;
}

const FormFieldWrapper = ({
  name,
  title,
  error,
  children,
}: FormFieldWrapperProps) => {
  return (
    <ChakraField.Root orientation="horizontal" gap="1rem" invalid={error}>
      <ChakraField.Label htmlFor={name}>{title}</ChakraField.Label>
      {children}
    </ChakraField.Root>
  );
};

export default FormFieldWrapper;
