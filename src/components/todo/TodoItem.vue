<template>
  <div
    class="todo"
    :class="todo.completed && 'completed'"
    @click="updateTodo({ ...todo, completed: !todo.completed })"
  >
    <div class="todo-title">
      <custom-checkbox :completed="todo.completed" />
      <div>
        {{ todo.title }}
      </div>
    </div>
    <img :src="cross" class="svgIcon" @click.stop="deleteTodo(todo.id)" />
  </div>
</template>

<script>
import ITodo from "@/model/TodoList.model";
import { mapActions } from "vuex";
import CustomCheckbox from "@/components/uikit/CustomCheckbox.vue";

export default {
  name: "todo-item",
  components: { CustomCheckbox },
  props: {
    todo: {
      type: ITodo,
      require,
    },
  },
  methods: {
    ...mapActions({
      updateTodo: "todo/updateTodo",
      deleteTodo: "todo/deleteTodo",
    }),
  },
  data() {
    return {
      cross: require("@/assets/cross.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--background-color-secondary);
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary-color);
  cursor: pointer;

  .todo-title {
    display: flex;
    gap: 20px;
    align-items: center;
    max-width: 90%;
    word-break: break-word;
  }

  .svgIcon {
    width: 24px;
    height: 24px;
    opacity: 0;
  }

  &.completed {
    text-decoration: line-through;
    color: var(--text-ligth-color);
  }
}

.todo:hover {
  .svgIcon {
    opacity: 1;
  }
}

.todo:last-child {
  border-bottom: none;
}
</style>
