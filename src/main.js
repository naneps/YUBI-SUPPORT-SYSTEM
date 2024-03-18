import { createApp } from "vue";
import App from "./App.vue";

import GlobalComponents from "./components";
import "./index.js";
import router from "./router";
import pinia from "./store";
import "./style.css";
import FormatterPlugin from "./utils/formatter.js";

const app = createApp(App);
app.use(pinia).use(router).use(FormatterPlugin).use(GlobalComponents).mount("#app");
