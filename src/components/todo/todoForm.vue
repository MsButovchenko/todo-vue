<template>
  <form class="form-container" @submit.prevent="createNewTodo">
    <my-input v-model="taskName" placeholder="Add new TODO...." />
    <custom-icon-button
      @click="createNewTodo"
      :disabled="!taskName.length"
      type="submit"
      class="button-add"
    >
      <img :src="addIcon" />
    </custom-icon-button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { ref } from "vue";
import CustomIconButton from "@/components/uikit/CustomIconButton.vue";

export default {
  name: "form-todo",
  components: { CustomIconButton },
  props: {
    userId: {
      type: Number,
      require: true,
    },
  },
  methods: {
    ...mapActions({
      createTodo: "todo/createTodo",
    }),
    createNewTodo() {
      if (this.taskName.length) {
        const newTask = {
          userId: this.userId,
          title: this.taskName,
          completed: false,
          id: new Date().getMilliseconds(),
        };
        this.createTodo(newTask);
        this.taskName = "";
      }
    },
  },
  data() {
    return {
      addIcon: require("@/assets/plus.svg"),
    };
  },
  setup() {
    const taskName = ref("");
    return { taskName };
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  background-color: var(--background-color-secondary);
  border-radius: 8px;

  .button-add {
    margin-right: 15px;
  }
}
</style>
