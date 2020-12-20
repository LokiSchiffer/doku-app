// Import vue-router and main app
import vueRouter from "vue-router";

// Import components
import Welcome from "./components/Welcome";
import UserCreate from "./components/UserCreate";
import UserSearch from "./components/UserSearch";
import AdminLogin from "./components/AdminLogin";
import UserDelete from "./components/UserDelete";

// Create router constant and path to components
const router = new vueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/user/admon/login",
      name: "admin_login",
      component: AdminLogin
    },
    {
      path: "/user/admon/create/",
      name: "user_create",
      component: UserCreate
    },
    {
      path: "/user/admon/search/",
      name: "user_search",
      component: UserSearch
    },
    {
      path: "/user/admon/delete/",
      name: "user_delete",
      component: UserDelete
    }
  ]
});

export default router;
