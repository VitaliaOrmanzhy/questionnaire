import QuizList from "@/components/quizes/QuizList";
import CustomSpinner from "@/components/ui/CustomSpinner";
import SearchInput from "@/components/ui/SearchInput";
import { useGetAllQuizesInfiniteQuery } from "@/store/api/quizesApi";
import { PAGE_LIMIT } from "@/utils/constants/constants";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const {
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useGetAllQuizesInfiniteQuery({ q, limit: PAGE_LIMIT });

  const scrollHandler = () => {
    if (document.documentElement.scrollTop < 50) {
      fetchPreviousPage();
    }
    if (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      fetchNextPage();
      window.scrollTo(
        0,
        document.documentElement.scrollHeight +
          document.documentElement.scrollTop
      );
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const [searchInputValue, setSearchInputValue] = useState("");

  console.log(error);
  return (
    <div>
      <SearchInput value={searchInputValue} onChange={setSearchInputValue} />
      {isFetchingPreviousPage && <CustomSpinner />}
      {data && <QuizList quizes={data.pages.flat()} />}
      {isFetchingNextPage && <CustomSpinner />}
    </div>
  );
};

export default MainPage;
