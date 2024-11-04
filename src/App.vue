<template>
  <Header :is-dark="isDark" @changeMode="toggleDark" />
  <router-view class="container" />
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
import Header from "@/components/header/Header.vue";

export default {
  components: { Header },
  setup() {
    const isDark = useDark({ selector: "body" });
    const toggleDark = useToggle(isDark);

    return {
      isDark,
      toggleDark,
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  overflow: hidden;
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --text-secondary-color: hsl(236, 9%, 61%);
  --text-ligth-color: hsl(233, 11%, 84%);
  --element-size: 4rem;
  --color-red: #e32636;
  --header-size: 75px;
  --scrollbar-thumb-color: #c8c8c8;
  --background-image: url(./assets/bg-desktop-light.jpg);
  --border-color: hsl(236, 33%, 92%);
  --color-very-light-grayish-blue: hsl(236, 33%, 92%);
  --color-gradient-start: hsl(192, 100%, 67%);
  --color-gradient-end: hsl(280, 87%, 65%);
  --color-very-dark-desaturated-blue: #fafafa;
  --color-box-shadow: rgba(157, 162, 235, 0.3);
}

body.dark {
  --background-color-primary: hsl(235, 21%, 11%);
  --background-color-secondary: hsl(235, 24%, 19%);
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
  --text-secondary-color: hsl(234, 11%, 52%);
  --text-ligth-color: hsl(233, 14%, 35%);

  --color-red: #960018;
  --scrollbar-thumb-color: grey;
  --background-image: url(./assets/bg-desktop-dark.jpg);
  --border-color: hsl(237, 14%, 26%);
  --color-very-light-grayish-blue: hsl(233, 14%, 35%);
  --color-very-dark-desaturated-blue: hsl(235, 24%, 19%);
  --color-box-shadow: rgba(37, 39, 60, 0.2);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--background-color-primary);
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: 100%;

  color: var(--text-primary-color);
  height: 100%;
  width: 100%;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: var(--background-color-secondary);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-very-light-grayish-blue);
  border-radius: 100px;
}

.container {
  height: calc(100vh - var(--header-size));
  overflow: hidden;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
