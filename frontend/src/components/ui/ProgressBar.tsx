import { HStack, Progress } from "@chakra-ui/react";

interface IProgressBarProps {
  label: string;
  value: number;
}

const ProgressBar = ({ label, value }: IProgressBarProps) => {
  return (
    <Progress.Root value={value} maxW="sm">
      <HStack gap="5">
        <Progress.Label>{label}</Progress.Label>
        <Progress.Track flex="1">
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText>40%</Progress.ValueText>
      </HStack>
    </Progress.Root>
  );
};

export default ProgressBar;
