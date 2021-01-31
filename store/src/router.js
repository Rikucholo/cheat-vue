import Vue from "vue";
import Router from "vue-router";
import inc from "./components/inc";
import HelloWorld from "./components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: HelloWorld },
    { path: "/inc", name: "inc", component: inc },
  ],
});
