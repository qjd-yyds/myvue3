import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { getToken } from "@/utils/auth";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const whitelist = ["Login"];
router.beforeEach((to, from, next) => {
  const token = getToken();
  const toName = to.name;
  // 如果存在token 继续
  if (token) {
    if (toName === "Login") {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    // 如果存在白名单 跳过监测
    if (whitelist.includes(toName as string)) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  }
});
export default router;
