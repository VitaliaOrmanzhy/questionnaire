import { useGetQuestionsQuery } from "@/store/api/quizesApi";
import { Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router";
import ProgressBar from "@/components/ui/ProgressBar";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { answerQuestion, startQuiz } from "@/store/slices/quizSlice";
import CustomSpinner from "@/components/ui/CustomSpinner";
import Question from "@/components/questions/QuestionContainer";
import { useEffect } from "react";
import type { TAnswerPayload } from "@/types/answer";

const QuizProgressPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const idString = id as string;

  const { data, isLoading, error } = useGetQuestionsQuery(idString);

  useEffect(() => {
    if (data) {
      dispatch(startQuiz(idString));
    }
    // localStorage.get("currQuiz");
  }, [dispatch, data, idString]);
  let currQuestionIdx = 0;

  const { answers } = useAppSelector((state) => state.quiz);
  //global answer from state
  const currAnswer = answers.find((el) => (el.questionId = idString));

  //!!!
  const handleChange = (answer: TAnswerPayload) => {
    if (data) {
      dispatch(answerQuestion(answer));
    }
  };

  const handleNext = () => {
    currQuestionIdx++;
  };

  return (
    <Box>
      <ProgressBar label="Progress" value={40} />
      {isLoading && <CustomSpinner />}
      {!isLoading && !data && <p>Error</p>}
      {data && (
        <>
          <Question
            question={data?.[currQuestionIdx]}
            initialState={currAnswer}
            onChange={handleChange}
          />
          <Button onClick={handleNext}>Next</Button>
        </>
      )}
    </Box>
  );
};

export default QuizProgressPage;
