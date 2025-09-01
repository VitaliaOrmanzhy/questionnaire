import withAuth from "@/components/withAuth";
import { useGetSingleQuizQuery } from "@/features/quizes/quizesApi";
import { useParams } from "react-router";

const QuizStartPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetSingleQuizQuery(id as string, {
    skip: !id,
  });
  console.log(error);

  return (
    <div>
      {isLoading}
      {data?.title}
      Quiz start page
    </div>
  );
};

const QuizStartPageWithAuth = withAuth(QuizStartPage);
export default QuizStartPageWithAuth;
