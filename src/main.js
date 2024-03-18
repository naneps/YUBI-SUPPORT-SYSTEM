import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import pinia from "./store";
import "./style.css";
import FormatterPlugin from "./utils/formatter.js";

import "./index.js";

const app = createApp(App);
app.use(pinia).use(router).use(FormatterPlugin).mount("#app");
