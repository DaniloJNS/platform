import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Conferences from "../views/Conferences.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Conferences",
    name: "Conferences",
    component: Conferences,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
