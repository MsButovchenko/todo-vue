<template>
  <div
    class="user-container"
    @click="
      $router.push({
        path: `/todo/${user.id}`,
        query: { username: user.name },
      })
    "
  >
    <h3>{{ user.name }}</h3>
    <h4>ToDO ⮕</h4>
  </div>
</template>

<script>
import { IUser } from "@/model/Users.model";
import router from "@/router";

export default {
  name: "user-panel",
  methods: { router },
  props: {
    user: {
      type: IUser,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  width: 400px;
  min-width: 200px;
  display: flex;
  gap: 16px;
  padding: 20px;
  background-color: var(--background-color-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  height: auto;
  box-shadow: -1px 5px 20px 10px var(--color-box-shadow);
  justify-content: space-between;
  h4 {
    color: var(--text-secondary-color);
  }
}
</style>
