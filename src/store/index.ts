import { createStore } from "vuex";
import { usersModule } from "@/store/module/Users.module";
import { todoListModule } from "@/store/module/Todo.module";

export default createStore<any>({
  modules: {
    users: usersModule,
    todo: todoListModule,
  },
});
