<template>
  <div>
    <vue-spinner-ball v-if="isLoading" :size="100" />
    <div v-else class="todo-container">
      <div class="title">
        <nav>
          <router-link to="/"><h1>⭠</h1></router-link>
        </nav>
        <h1>{{ username ? `${username} TО-DО` : "TO-DO NOW" }}</h1>
      </div>
      <form-todo :user-id="userId" v-if="!!userId" />
      <todo-items />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import FormTodo from "@/components/todo/todoForm.vue";
import { useRoute } from "vue-router";
import TodoItems from "@/components/todo/TodoItems.vue";

export default {
  components: { TodoItems, FormTodo },
  props: {
    todoName: {
      type: String,
    },
  },
  name: "todo-page",
  methods: {
    ...mapActions({
      fetchTodo: "todo/fetchTodoList",
    }),
    ...mapMutations({
      clear: "todo/clear",
    }),
  },
  computed: {
    ...mapGetters({
      isLoading: "todo/isLoading",
      userId: "todo/userId",
    }),
  },
  setup() {
    const route = useRoute();
    return {
      username: route.query.username,
    };
  },
  mounted() {
    const route = useRoute();
    this.fetchTodo(route.params?.id);
  },
  unmounted() {
    this.clear();
  },
};
</script>

<style lang="scss" scoped>
.todo-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  .title {
    display: flex;
    gap: 16px;
    justify-content: center;

    nav {
      padding: 0;

      a {
        text-decoration: none;
        color: var(--text-primary-color);
      }
    }
  }
}
</style>
