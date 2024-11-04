export interface IPagination<T> {
  content: T[];
  isLoading: boolean;
  page: number;
  limit: number;
  totalPages: number;
}
