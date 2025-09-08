import type { IQuiz } from "@/types/quiz";
import { Box, Heading, Link, Skeleton, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";

interface IQuizDetailsProps {
  quiz?: Partial<IQuiz>;
  isLoading: boolean;
}

const QuizDetails = ({ quiz, isLoading }: IQuizDetailsProps) => {
  return (
    <Box>
      <Skeleton asChild loading={isLoading}>
        <Heading>{quiz?.title}</Heading>
      </Skeleton>
      <Skeleton asChild loading={isLoading}>
        <Text>{quiz?.description}</Text>
      </Skeleton>
      <Text>
        Author:{" "}
        <Skeleton asChild loading={isLoading}>
          <Link asChild variant="underline">
            <NavLink to={`/users/${quiz?.author?.id}`}>
              {quiz?.author?.username}
            </NavLink>
          </Link>
        </Skeleton>
      </Text>
      <Text>
        Questions:{" "}
        <Skeleton asChild loading={isLoading}>
          {quiz?.questionsCount}
        </Skeleton>
      </Text>
    </Box>
  );
};

export default QuizDetails;
