import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import pinia from "./store";
import "./style.css";

import "./index.js";

const app = createApp(App);
app.use(pinia).use(router).mount("#app");
