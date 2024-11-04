<template>
  <div class="todo-list__wrapper">
    <div class="todo-list-panel">
      <h3 v-if="!todoList?.length">You don't have a task 👽</h3>
      <div v-if="todoList && todoList.length" class="todo-list">
        <TransitionGroup class="list">
          <todo-item v-for="todo in todoList" :key="todo.id" :todo="todo" />
        </TransitionGroup>
        <div v-intersection="loadMoreTodo">
          <vue-spinner-bar v-if="page !== totalPages" />
        </div>
      </div>
      <todo-settings />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/todo/TodoItem.vue";
import { mapActions, mapGetters } from "vuex";
import TodoSettings from "@/components/todo/TodoSettings.vue";

export default {
  name: "todo-items",
  components: { TodoSettings, TodoItem },
  computed: {
    ...mapGetters({
      todoList: "todo/filteredContent",
      page: "todo/page",
      totalPages: "todo/totalPages",
    }),
  },
  methods: {
    ...mapActions({
      loadMoreTodo: "todo/loadMoreTodo",
    }),
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.todo-list__wrapper {
  display: flex;
  width: 100%;
  justify-content: center;

  .todo-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 440px;
    border-radius: 8px 8px 0 0;
  }

  .todo-list-panel {
    width: 50%;
    box-shadow: -1px 5px 20px 10px var(--color-box-shadow);
    border-radius: 8px;
    background-color: var(--background-color-secondary);

    h3 {
      padding: 20px 0;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
