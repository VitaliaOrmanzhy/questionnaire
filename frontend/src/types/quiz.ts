export type Answer = {
    id: string;
    title: string;
    isCorrect: boolean;
}

export type Question = {
    id: string;
    title: string;
    answers: Answer[]
}

export type Quiz = {
    id: string;
    title: string;
    description: string;
    completionsCount: number;
    questions: Question[]
}

export type QuizQuery = Partial<Pick<Quiz, "title" | "completionsCount">>;