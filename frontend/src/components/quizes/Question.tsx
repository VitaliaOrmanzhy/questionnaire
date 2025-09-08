import { Box, Input, FileUpload, Button, Text } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";
import React from "react";
import OptionsList from "./OptionsList";
import type { TQuestion } from "@/types/quiz";

interface IQuestionProps {
  question: TQuestion;
}

const Question = ({ question }: IQuestionProps) => {
  return (
    <Box>
      <Text>{question.title}</Text>
      {question &&
        (question.type === "radio" || question.type === "checkbox") && (
          <OptionsList type={question.type} options={question.options} />
        )}
      {question && question.type === "text" && (
        <Input placeholder={question.placeholder} />
      )}
      {question && question.type === "image" && (
        <FileUpload.Root>
          <FileUpload.HiddenInput />
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm">
              <HiUpload /> Upload file
            </Button>
          </FileUpload.Trigger>
          <FileUpload.List />
        </FileUpload.Root>
      )}
    </Box>
  );
};

export default Question;
