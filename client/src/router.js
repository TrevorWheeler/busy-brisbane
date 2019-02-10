import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Projects from "./views/Projects.vue"
import CreateProject from "./views/CreateProject.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
       {
      path: "/projects/create",
      name: "projects-create",
      component: CreateProject
    },
  ]
});

