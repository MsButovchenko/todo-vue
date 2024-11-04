<template>
  <div class="settings-panel">
    <div class="settings-filter">
      <div
        @click="setFilter(ETodoActiveFilter.Default)"
        :class="
          activeFilter === ETodoActiveFilter.Default && 'setting-item-active'
        "
      >
        All
      </div>
      <div
        @click="setFilter(ETodoActiveFilter.Active)"
        :class="
          activeFilter === ETodoActiveFilter.Active && 'setting-item-active'
        "
      >
        Active
      </div>
      <div
        @click="setFilter(ETodoActiveFilter.Completed)"
        :class="
          activeFilter === ETodoActiveFilter.Completed && 'setting-item-active'
        "
      >
        Completed
      </div>
    </div>
    <div @click="deleteCompleted" class="settings-clear">Clear completed</div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { ETodoActiveFilter } from "@/model/TodoList.model";

export default {
  name: "todo-settings",
  computed: {
    ETodoActiveFilter() {
      return ETodoActiveFilter;
    },
    ...mapGetters({
      activeFilter: "todo/activeFilter",
    }),
  },
  methods: {
    ...mapMutations({
      setFilter: "todo/setFilter",
    }),
    ...mapActions({
      deleteCompleted: "todo/deleteCompletedTodo",
    }),
  },
};
</script>

<style lang="scss" scoped>
.settings-panel {
  background-color: var(--background-color-secondary);
  color: var(--text-secondary-color);
  border-radius: 0 0 8px 8px;
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  .settings-filter {
    display: flex;
    gap: 20px;

    div {
      cursor: pointer;
    }

    .setting-item-active {
      font-weight: bold;
      color: var(--text-primary-color);
    }
  }

  .settings-clear {
    cursor: pointer;
  }
  .settings-clear:hover {
    color: var(--text-primary-color);
  }
}
</style>
