import { createApp } from "vue";
import { createPinia } from "pinia";
import less from "less";
import router from "./router/index";
import "./style.css";
import App from "./App.vue";
import "element-plus/dist/index.css";
import i18n from "./i18n/";

const pinia = createPinia(); // 创建Pinia实例
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(less as any);
app.mount("#app");
