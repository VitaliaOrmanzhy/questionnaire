export interface IPaginationQuery {
    page: number;
    limit?: number;
}

export interface IGetAllQuizesQuery extends IPaginationQuery {
    q?: string;
}