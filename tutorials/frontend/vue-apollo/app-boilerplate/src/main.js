import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AuthPlugin from "./plugins/auth";

createApp(App)
  .use(router)
  .use(AuthPlugin)
  .mount("#app");
