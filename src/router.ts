import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./components/users/Login.vue";
import CreateUser from "./components/users/CreateUser.vue";
import NewProject from "./components/projects/NewProject.vue";
import EditProject from "./components/projects/EditProject.vue";
import ProjectList from '@/components/projects/ProjectList.vue'
import store from "./store";


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
    {
      path: "/project/edit/:id",
      name: "Edit Project",
      component: EditProject,
    },
  ]
});

router.beforeEach((to, from, next) => {

  if (to.path === '/login' || to.path === '/' ||  to.path === '/users/new') {
    next()
  } else if (!store.getters.isAuthenticated) {
    next({path: '/login'})
  } else {
    next();
  }
});

export default router;
