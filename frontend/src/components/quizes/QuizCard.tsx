import type { Quiz } from "@/types/quiz";
import { NavLink } from "react-router";

const QuizCard = ({
  id,
  title,
  description,
  completionsCount,
  questions,
}: Quiz) => {
  return (
    <NavLink to={`/quizes/${id}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>Completions: {completionsCount}</p>
        <p>Questions: {questions.length}</p>
      </div>
    </NavLink>
  );
};

export default QuizCard;
