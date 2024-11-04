<template>
  <div>
    <input
      type="checkbox"
      name="completed-checkbox"
      :defaultChecked="completed"
      class="input-checkbox"
    />
    <div class="checkbox-border-wrap" :class="completed && 'checkbox-active'">
      <span class="checkbox">
        <img :src="checked" v-if="completed" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-checkbox",
  props: {
    completed: {
      type: Boolean,
    },
  },
  data() {
    return {
      checked: require("@/assets/icon-checked.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.input-checkbox {
  display: none;
}
.checkbox-border-wrap {
  padding: 0.1rem;
  background: var(--color-very-light-grayish-blue);
  border-radius: 50%;
}

.checkbox-border-wrap:hover,
.checkbox-active {
  background: linear-gradient(
    to bottom right,
    var(--color-gradient-start),
    var(--color-gradient-end)
  );
}

.checkbox-active {
  .checkbox {
    background: linear-gradient(
      to bottom right,
      var(--color-gradient-start),
      var(--color-gradient-end)
    );
  }
}
.checkbox {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: inherit;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--color-very-dark-desaturated-blue);
}
</style>
