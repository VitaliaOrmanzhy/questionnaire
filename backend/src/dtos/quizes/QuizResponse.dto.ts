export interface QuizResponseDto {
  id: string;
  title: string;
  description: string;
  author: {
    id: string;
    username: string;
  };
  questionsCount: number;
}
