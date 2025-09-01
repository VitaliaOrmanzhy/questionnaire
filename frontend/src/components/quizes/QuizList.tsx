import type { IQuiz } from "@/types/quiz";
import QuizCard from "./QuizCard";

interface IQuizListProps {
  quizes: IQuiz[];
}

const QuizList = ({ quizes }: IQuizListProps) => {
  return (
    <div>
      {quizes.map(({ id, title, description, questionsCount }) => (
        <QuizCard
          key={id}
          id={id}
          title={title}
          description={description}
          questionsCount={questionsCount}
        />
      ))}
    </div>
  );
};

export default QuizList;
