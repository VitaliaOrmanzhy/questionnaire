interface ICompletorInfo {
  username: string;
  score: number;
  milliseconds: number;
}

export type TCompletorsInfo = ICompletorInfo[];

export interface QuizStatisticsResponseDto {
  averageCompletionTime?: number;
  completionsCount: number;
  completors: TCompletorsInfo;
}
