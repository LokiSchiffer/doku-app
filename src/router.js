// Import vue-router and main app
import vueRouter from "vue-router";
import App from "./App";

// Import components
import UserCreate from "./components/UserCreate";
import UserSearch from "./components/UserSearch";

// Create router constant and path to components
const router = new vueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "root",
      component: App
    },
    {
      path: "/user/admon/create/",
      name: "user_create",
      component: UserCreate
    },
    {
      path: "/user/admon/:username/",
      name: "user_search",
      component: UserSearch
    }
  ]
});

export default router;
