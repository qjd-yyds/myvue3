import { defineComponent, computed, PropType } from "vue";
import { useRoute, useRouter } from "vue-router";
import { menuRoute } from "./type";

export default defineComponent({
  name: "Menu",
  props: {
    item: {
      required: true,
      type: Object as PropType<menuRoute>,
    },
  },
  setup(props) {
    const { currentRoute, chooseRoute } = useMenuItem();
    return () => (
      <li
        class={`menu-list-item ${currentRoute.value === props.item.path ? "active" : ""}`}
        onClick={() => chooseRoute(props.item)}
      >
        <div class="menu-list-item-box"></div>
        <span class="menu-list-item-route">
          <span>{props.item.name}</span>
          <img
            class="menu-list-item-icon"
            src={props.item.icon}
            v-show={currentRoute.value === props.item.path}
          />
        </span>
      </li>
    );
  },
});
// 用到的方法
export function useMenuItem() {
  const router = useRouter();
  const Route = useRoute();
  // 当前的路由
  const currentRoute = computed(() => {
    return Route.path;
  });
  // 跳转路由
  function chooseRoute(menu: menuRoute) {
    if (menu.path === currentRoute.value) {
      return;
    }
    router.push(menu.path);
  }
  return {
    chooseRoute,
    currentRoute,
  };
}
