import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import User from "./components/User.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/users/:id", component: User, props: true },
  ],
});
