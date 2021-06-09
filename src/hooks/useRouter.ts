import { computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

export function useHandleRouter() {
  const route = useRoute();
  const router = useRouter();
  // 当前的路由
  const currentRoute = computed(() => {
    return route.path;
  });
  return {
    route,
    router,
    currentRoute,
  };
}
