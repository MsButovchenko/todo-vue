import axios from "axios";
import { ActionContext } from "vuex";
import {
  ETodoActiveFilter,
  ITodo,
  ITodoPagination,
} from "@/model/TodoList.model";

export const todoListModule = {
  state: (): ITodoPagination<ITodo> => ({
    content: [],
    isLoading: true,
    page: 1,
    limit: 20,
    totalPages: 0,
    userId: null,
    activeFilter: ETodoActiveFilter.Default,
  }),
  getters: {
    content(state: ITodoPagination<ITodo>) {
      return state.content;
    },
    filteredContent(state: ITodoPagination<ITodo>) {
      return state.activeFilter === ETodoActiveFilter.Default
        ? state.content
        : state.content.filter((todo) =>
            state.activeFilter === ETodoActiveFilter.Active
              ? !todo.completed
              : todo.completed
          );
    },
    isLoading(state: ITodoPagination<ITodo>) {
      return state.isLoading;
    },
    activeFilter(state: ITodoPagination<ITodo>) {
      return state.activeFilter;
    },
    userId(state: ITodoPagination<ITodo>) {
      return state.userId;
    },
    page(state: ITodoPagination<ITodo>) {
      return state.page;
    },
    totalPages(state: ITodoPagination<ITodo>) {
      return state.totalPages;
    },
  },
  mutations: {
    setContent(state: ITodoPagination<ITodo>, todo: ITodo[]) {
      state.content = todo;
    },
    setLoading(state: ITodoPagination<ITodo>, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    setPage(state: ITodoPagination<ITodo>, page: number) {
      state.page = page;
    },
    setTotalPages(state: ITodoPagination<ITodo>, totalPages: number) {
      state.totalPages = totalPages;
    },
    setUserId(state: ITodoPagination<ITodo>, userId: number) {
      state.userId = userId;
    },
    setFilter(state: ITodoPagination<ITodo>, filter: ETodoActiveFilter) {
      state.activeFilter = filter;
    },
    clear(state: ITodoPagination<ITodo>) {
      state.content = [];
      state.isLoading = true;
      state.page = 1;
      state.limit = 20;
      state.totalPages = 0;
      state.userId = null;
      state.activeFilter = ETodoActiveFilter.Default;
    },
  },
  actions: {
    async fetchTodoList(
      {
        state,
        commit,
      }: ActionContext<ITodoPagination<ITodo>, ITodoPagination<ITodo>>,
      userId?: number
    ) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
              userId: userId,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setContent", response.data);
        commit("setUserId", userId);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMoreTodo({
      state,
      commit,
    }: ActionContext<ITodoPagination<ITodo>, ITodoPagination<ITodo>>) {
      if (state.page !== state.totalPages) {
        try {
          commit("setPage", state.page + 1);
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos",
            {
              params: {
                _page: state.page,
                _limit: state.limit,
                userId: state.userId,
              },
            }
          );
          commit(
            "setTotalPages",
            Math.ceil(response.headers["x-total-count"] / state.limit)
          );
          commit("setContent", [...state.content, ...response.data]);
        } catch (e) {
          console.log(e);
        }
      }
    },
    updateTodo(
      {
        state,
        commit,
      }: ActionContext<ITodoPagination<ITodo>, ITodoPagination<ITodo>>,
      updatedTodo: ITodo
    ) {
      const newData = state.content.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      commit("setContent", newData);
    },
    deleteTodo(
      {
        state,
        commit,
      }: ActionContext<ITodoPagination<ITodo>, ITodoPagination<ITodo>>,
      id: number
    ) {
      const newData = state.content.filter((todo) => todo.id !== id);
      commit("setContent", newData);
    },
    deleteCompletedTodo({
      state,
      commit,
    }: ActionContext<ITodoPagination<ITodo>, ITodoPagination<ITodo>>) {
      const newData = state.content.filter((todo) => !todo.completed);
      commit("setContent", newData);
    },
    createTodo(
      {
        state,
        commit,
      }: ActionContext<ITodoPagination<ITodo>, ITodoPagination<ITodo>>,
      newTodo: ITodo
    ) {
      commit("setContent", [newTodo, ...state.content]);
    },
  },
  namespaced: true,
};
