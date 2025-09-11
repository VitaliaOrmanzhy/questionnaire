import type {
  IImageAnswer,
  TAnswerPayload,
  TOnAnswerChange,
} from "@/types/answer";
import type { IImageQuestion } from "@/types/quiz";
import { Box, Button, FileUpload, Text, useFileUpload } from "@chakra-ui/react";
import { useEffect } from "react";
import { HiUpload } from "react-icons/hi";

interface IImageQuestionProps {
  question: IImageQuestion;
  initialState: IImageAnswer;
  onChange: TOnAnswerChange;
}

const ImageQuestion = ({
  question,
  initialState,
  onChange,
}: IImageQuestionProps) => {
  const fileUpload = useFileUpload({
    maxFiles: 1,
    maxFileSize: 3000,
  });

  const accepted = fileUpload.acceptedFiles[0];
  //   const rejected = fileUpload.rejectedFiles[0];

  useEffect(() => {
    const answer: TAnswerPayload = {
      questionId: question.id,
      type: "image",
      value: accepted,
    };
    onChange(answer);
  }, [accepted, onChange]);

  return (
    <Box>
      <Text>{question.title}</Text>
      <FileUpload.RootProvider value={fileUpload}>
        <FileUpload.Root accept={["image/png"]} maxFiles={1}>
          <FileUpload.HiddenInput />
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm">
              <HiUpload /> Upload file
            </Button>
          </FileUpload.Trigger>
          <FileUpload.Item file={initialState.image}>
            <FileUpload.ItemPreview />
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger />
          </FileUpload.Item>
        </FileUpload.Root>
      </FileUpload.RootProvider>
    </Box>
  );
};

export default ImageQuestion;
