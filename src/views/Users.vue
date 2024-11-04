<template>
  <div>
    <vue-spinner-ball v-if="isLoading" size="100" />
    <div v-else class="users-page">
      <h1>Select a user to go to their TODO</h1>
      <div class="users-container">
        <user-panel v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserPanel from "@/components/users/UserPanel.vue";

export default {
  components: { UserPanel },
  name: "user-page",
  methods: {
    ...mapActions({
      loadMoreUsers: "users/loadMoreUsers",
      fetchUsers: "users/fetchUsers",
    }),
  },
  computed: {
    ...mapGetters({
      users: "users/content",
      isLoading: "users/isLoading",
    }),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
.users-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 80px;

  .users-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
