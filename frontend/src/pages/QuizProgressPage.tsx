import { useGetQuestionsQuery } from "@/store/api/quizesApi";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";
import ProgressBar from "@/components/ui/ProgressBar";
import SubmitButton from "@/components/ui/forms/SubmitButton";
import { useAppDispatch } from "@/hooks/hooks";
import { answerQuestion } from "@/store/slices/quizSlice";
import CustomSpinner from "@/components/ui/CustomSpinner";
import Question from "@/components/quizes/Question";

const QuizProgressPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const idString = id as string;

  const { data, isLoading, error } = useGetQuestionsQuery(idString);
  // const questionsCount = data?.length;
  const currQuestionIdx = 0;
  const currQuestion = data?.[currQuestionIdx];

  const handleNext = (questionId: string, optionsIds: string[]) => {
    dispatch(answerQuestion({ questionId, optionsIds }));
  };

  return (
    <Box>
      <ProgressBar label="Progress" value={40} />
      {isLoading && <CustomSpinner />}
      {!isLoading && !currQuestion && <p>Error</p>}
      {currQuestion && <Question question={currQuestion} />}
      <SubmitButton onClick={}>Next</SubmitButton>
    </Box>
  );
};

export default QuizProgressPage;
