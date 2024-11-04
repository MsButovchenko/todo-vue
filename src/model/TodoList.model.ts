import { IPagination } from "@/model/Common.model";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: true;
}

export enum ETodoActiveFilter {
  Default = "",
  Completed = "completed",
  Active = "active",
}

export interface ITodoPagination<T> extends IPagination<T> {
  userId: number | null;
  activeFilter: ETodoActiveFilter;
}
