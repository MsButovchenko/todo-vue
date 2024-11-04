import { createApp } from "vue";
import App from "./App.vue";
import directives from "./directives";
import uikit from "@/components/uikit";
import router from "./router";
import store from "./store";
import { VueSpinnersPlugin } from "vue3-spinners";

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(VueSpinnersPlugin);

uikit.forEach((kit) => {
  app.component(kit.name, kit);
});

app.use(store).use(router).mount("#app");
