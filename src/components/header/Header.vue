<template>
  <div class="header">
    <div class="toggle">
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="toggle__checkbox"
      />
      <label for="checkbox" class="toggle__label">
        <span>🌙</span>
        <span>☀️</span>
        <div
          class="toggle__switch"
          :class="{ 'toggle__switch-checked': isDark }"
        ></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component",
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {};
  },
  methods: {
    toggleTheme() {
      this.$emit("changeMode");
    },
  },
  setup() {
    return { currentRoutePath: location.pathname };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  gap: 16px;
  height: var(--header-size);
}

.toggle {
  margin: 20px 20px 20px auto;

  &__checkbox {
    display: none;
  }

  &__label {
    /* for width, use the standard element-size */
    width: var(--element-size);

    /* for other dimensions, calculate values based on it */
    border-radius: var(--element-size);
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    padding: calc(var(--element-size) * 0.1);
    font-size: calc(var(--element-size) * 0.3);
    height: calc(var(--element-size) * 0.35);

    align-items: center;
    background: var(--background-color-primary);
    cursor: pointer;
    display: flex;
    position: relative;
    transition: background 0.5s ease;
    justify-content: space-between;
    z-index: 1;

    span {
      background: var(--background-color-primary);
    }
  }

  &__switch {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: calc(var(--element-size) * 0.07);
    left: calc(var(--element-size) * 0.07);
    height: calc(var(--element-size) * 0.4);
    width: calc(var(--element-size) * 0.5);
    transform: translateX(0);
    transition: transform 0.3s ease-in-out, background-color 0.5s ease-out;

    &-checked {
      transform: translateX(calc(var(--element-size) * 0.6)) !important;
    }
  }
}
</style>
