import store from "@/store";
import { ElMessageBox } from "element-plus";
import { throttle } from "./tool";
// 获取权限
export function getToken(): string {
  // 获取缓存中的token数据，如果存在则读取
  if (sessionStorage.token) {
    setToken(sessionStorage.token);
    sessionStorage.removeItem("token");
  }
  return (store as any).state.token || "";
}

// 设置权限
export function setToken(token: string) {
  store.commit("SET_TOKEN", token);
  // 刷新浏览器前将数据存储到 sessionStorage
  window.addEventListener(
    "beforeunload",
    () => {
      sessionStorage.setItem("token", (store as any).state.token);
    },
    {
      once: true,
    },
  );
}

// 去除权限
export function removeToken() {
  // 去除token 刷新浏览器
  (store as any).commit("SET_TOKEN", "");
  window.location.reload();
}

// 用户过期处理
function overdue(code: number) {
  if (code === 401) {
    ElMessageBox.confirm("当前用户权限过期,是否跳转至登录页", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        removeToken();
      })
      .catch(() => {
        console.log("取消");
      });
  }
}
export const throttleOverdue = throttle(overdue, 1000);
