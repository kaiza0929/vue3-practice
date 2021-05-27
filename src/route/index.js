import { createRouter, createWebHistory } from "vue-router";
import Main from "./../components/Main";
import Login from "./../components/Login"

export const history = createWebHistory();

const router = createRouter({
    history: history,
    routes: [
        {
            path: "/",
            component: Main
        },
        {
            path: "/login",
            component: Login
        }
    ]
});

export default router;