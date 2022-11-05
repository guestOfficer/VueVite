import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
const pinia = createPinia(); // 创建Pinia实例
const app = createApp(App);
app.use(pinia);
app.mount("#app");
