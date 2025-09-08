import withAuth from "@/components/withAuth";
import { useGetSingleQuizQuery } from "@/store/api/quizesApi";
import { useParams } from "react-router";
import { Button, Tabs } from "@chakra-ui/react";
import QuizStatistics from "@/components/quizes/QuizStatistics";
import QuizDetails from "@/components/quizes/QuizDetails";

const QuizStartPage = () => {
  const { id } = useParams();
  const idString = id as string;

  const { data, isLoading, error } = useGetSingleQuizQuery(idString, {
    skip: !id,
  });
  console.log(error);

  return (
    <Tabs.Root lazyMount defaultValue="quiz-start">
      <Tabs.List>
        <Tabs.Trigger value="quiz-start">Members</Tabs.Trigger>
        <Tabs.Trigger value="quiz-statistics">Projects</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="quiz-start">
        <QuizDetails quiz={data} isLoading={isLoading} />
        <Button>Start quiz</Button>
      </Tabs.Content>
      <Tabs.Content value="quiz-statistics">
        <QuizStatistics id={idString} />
      </Tabs.Content>
    </Tabs.Root>
  );
};

const QuizStartPageWithAuth = withAuth(QuizStartPage);
export default QuizStartPageWithAuth;
