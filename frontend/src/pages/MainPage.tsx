import { useGetAllQuizesQuery } from "@/features/quizes/quizesApi";
import { useSearchParams } from "react-router";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const { data, isLoading, error } = useGetAllQuizesQuery(q);
  console.log(error);
  return (
    <div>
      Hello
      {data && data[0].title}
      {isLoading}
    </div>
  );
};

export default MainPage;
