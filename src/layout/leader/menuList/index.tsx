import { defineComponent } from "@vue/runtime-core";
import { useMenu } from "./usemenu";
import MenuItem from "./menu";
import "./style.scss";

export default defineComponent({
  name: "MenuList",
  setup() {
    const { menuList } = useMenu();
    return () => (
      <div class="menu-box">
        <ul class="menu-list">
          {menuList.value.map((item) => (
            <MenuItem item={item} />
          ))}
        </ul>
      </div>
    );
  },
});
