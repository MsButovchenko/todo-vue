import axios from "axios";
import { IPagination } from "@/model/Common.model";
import { IUser } from "@/model/Users.model";
import { ActionContext } from "vuex";

export const usersModule = {
  state: (): IPagination<IUser> => ({
    content: [],
    isLoading: true,
    page: 1,
    limit: 10,
    totalPages: 0,
  }),
  getters: {
    content(state: IPagination<IUser>) {
      return state.content;
    },
    isLoading(state: IPagination<IUser>) {
      return state.isLoading;
    },
  },
  mutations: {
    setContent(state: IPagination<IUser>, users: IUser[]) {
      state.content = users;
    },
    setLoading(state: IPagination<IUser>, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    setPage(state: IPagination<IUser>, page: number) {
      state.page = page;
    },
    setTotalPages(state: IPagination<IUser>, totalPages: number) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchUsers({
      state,
      commit,
    }: ActionContext<IPagination<IUser>, IPagination<IUser>>) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setContent", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMoreUsers({
      state,
      commit,
    }: ActionContext<IPagination<IUser>, IPagination<IUser>>) {
      try {
        commit("setPage", state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
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
    },
  },
  namespaced: true,
};
