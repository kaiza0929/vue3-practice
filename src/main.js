import { createApp } from "vue";
import App from "./App.vue";
/* index.jsではなくstoreディレクトリを指定 */
import store from "./store"

createApp(App).use(store).mount("#app");