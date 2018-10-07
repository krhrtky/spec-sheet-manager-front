import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/users/Login.vue";
import CreateUser from "./components/users/CreateUser.vue";
import NewProject from "./components/projects/NewProject.vue";
import ProjectList from '@/components/projects/ProjectList.vue'


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
      path: "/users/new",
      name: "Sign on",
      component: CreateUser
    },
    {
      path: "/project/new",
      name: "Add Project",
      component: NewProject
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectList
    },
  ]
});
