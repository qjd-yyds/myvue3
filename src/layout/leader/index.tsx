import { defineComponent } from "vue";
import PageHeader from "./pageHeader";
import MenuList from "./menuList";
import { useHandleRouter } from "@/hooks/useRouter";
import "./style.scss";

export default defineComponent({
  name: "leaderOut",
  setup() {
    const { route } = useHandleRouter();
    const headerIcon = route.meta.headerIcon;
    const leaderImage = route.meta.background;
    const leaderStyle = {
      background: leaderImage as string,
      backgroundSize: "100% 100%",
    };
    if (leaderImage) {
      leaderStyle.background = `url(${leaderImage})`;
    }
    return () => (
      <div class="leader" style={leaderStyle}>
        <PageHeader headerIcon={headerIcon as string} />
        <router-view></router-view>
        <MenuList />
      </div>
    );
  },
});
