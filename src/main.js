import { createApp } from "vue";
import App from "./components/App";
import router from "./router";

var app = createApp(App);
app.use(router);
app.mount("#app");