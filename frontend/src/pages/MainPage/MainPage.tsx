import { useGetAllQuizesQuery } from "@/features/quizes/quizesApi";

const MainPage = () => {
  const { data, isLoading, error } = useGetAllQuizesQuery();
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
