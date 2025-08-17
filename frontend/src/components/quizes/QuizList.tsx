import type { Quiz } from "@/types/quiz";
import QuizCard from "../QuizCard/QuizCard";

interface QuizListProps {
  quizes: Quiz[];
}

const QuizList = ({ quizes }: QuizListProps) => {
  return (
    <div>
      {quizes.map(({ id, title, description, completionsCount, questions }) => (
        <QuizCard
          key={id}
          id={id}
          title={title}
          description={description}
          completionsCount={completionsCount}
          questions={questions}
        />
      ))}
    </div>
  );
};

export default QuizList;
