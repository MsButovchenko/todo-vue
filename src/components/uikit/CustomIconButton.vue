<template>
  <button class="custom-icon-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-icon-button",
};
</script>

<style lang="scss" scoped>
.custom-icon-button {
  border: none;
  background-color: transparent;
  width: max-content;
  height: max-content;
  min-width: 24px;
  min-height: 24px;
}
</style>
