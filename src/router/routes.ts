import { RouteRecordRaw } from "vue-router";
import leaderLayout from "@/layout/leader";
const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/Login"),
  },
  {
    name: "Leader",
    path: "/leader",
    component: leaderLayout,
    redirect: {
      name: "Party",
    },
    children: [
      {
        path: "party",
        name: "Party",
        meta: {
          headerIcon: require("@/assets/router/header.png"),
          background: require("@/assets/router/partybg.png"),
        },
        component: () => import("@/views/Leader/party"),
      },
    ],
  },
];

export default routes;
