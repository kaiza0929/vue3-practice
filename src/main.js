import { createApp } from "vue";
import App from "./App.vue";
/* index.jsではなくrouteディレクトリを指定 */
import router from "./route";
/* index.jsではなくstoreディレクトリを指定 */
import store from "./store";

var app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");