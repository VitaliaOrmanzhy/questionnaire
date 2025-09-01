import type { IQuiz } from "@/types/quiz";
import { Badge, Card } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

type IQuizCardProps = Omit<IQuiz, "authorId">;

const QuizCard = ({
  id,
  title,
  description,
  questionsCount,
}: IQuizCardProps) => {
  const { t } = useTranslation("quiz");
  return (
    <NavLink to={`/quizes/${id}`}>
      <Card.Root variant="elevated">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Description>
            {description.length > 50
              ? description.substring(0, 20) + "..."
              : description}
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Badge>
            {t("questions-count-label")}: {questionsCount}
          </Badge>
        </Card.Footer>
      </Card.Root>
    </NavLink>
  );
};

export default QuizCard;
