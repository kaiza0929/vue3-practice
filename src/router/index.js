import { createRouter, createWebHistory } from "vue-router";
import Home from "./../components/pages/Home";
import Detail from "./../components/pages/Detail";
import Form from "./../components/pages/Form";

export const history = createWebHistory();

const router = createRouter({
    history: history,
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/detail",
            name: "detail",
            component: Detail,
            props: true
        },
        {
            path: "/new",
            component: Form
        }
    ]
});

export default router;
