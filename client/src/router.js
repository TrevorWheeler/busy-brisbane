import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import Register from "./views/Register.vue"
import Projects from "./views/Projects.vue"
import CreateProject from "./views/CreateProject.vue"
import ViewProject from "./views/ViewProject.vue"
import EditProject from "./views/EditProject.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "projects"
    },
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
    {
      path: "/project/:projectId",
      name: "project",
      component: ViewProject
    },
    {
      path: "/project/:projectId/edit",
      name: "project-edit",
      component: EditProject
    }
  
  ]
});

