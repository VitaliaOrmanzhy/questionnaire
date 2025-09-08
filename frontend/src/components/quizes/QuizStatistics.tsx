import { useGetQuizStatisticsQuery } from "@/store/api/quizesApi";
import { Box, Table, SkeletonText, Skeleton } from "@chakra-ui/react";

const QuizStatistics = ({ id }: { id: string }) => {
  //getting quiz statistics by id
  const { data, isLoading, error } = useGetQuizStatisticsQuery(id);
  return (
    <Box>
      {!error && (
        <>
          <p>
            Average completions time:
            <Skeleton loading={isLoading}>
              <span>{data?.averageCompletionTime}</span>
            </Skeleton>
          </p>
          <p>
            Completions:
            <Skeleton loading={isLoading}>{data?.completionsCount}</Skeleton>
          </p>
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>User</Table.ColumnHeader>
                <Table.ColumnHeader>Time</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Score</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data &&
                data.completors.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.username}</Table.Cell>
                    <Table.Cell>{item.milliseconds}</Table.Cell>
                    <Table.Cell textAlign="end">{item.score}</Table.Cell>
                  </Table.Row>
                ))}
              {isLoading &&
                new Array(4).fill(0).map((el, idx) => (
                  <Table.Row key={idx}>
                    <Table.Cell>
                      <SkeletonText />
                    </Table.Cell>
                    <Table.Cell>
                      <SkeletonText />
                    </Table.Cell>
                    <Table.Cell textAlign="end">
                      <SkeletonText />
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table.Root>
        </>
      )}
      {error && <p>error</p>}
    </Box>
  );
};

export default QuizStatistics;
