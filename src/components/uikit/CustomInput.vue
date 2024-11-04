<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  border: none;
  padding: 10px 15px;
  width: 100%;
  background: transparent;
  color: var(--text-secondary-color);
  font-size: 18px;
}

.input:focus {
  border: none;
  outline: none;
}
</style>
