import { defineComponent } from "vue";
import General from "./general";
import "./style.scss";
import { Notification } from "@/components/DialogBox/notice";

export default defineComponent({
  name: "Party",
  setup() {
    return () => (
      <div class="view-container">
        <div class="view">
          <el-button
            onClick={() =>
              Notification({
                message: "我也是p标签",
              })
            }
          >
            点击一下!测试!
          </el-button>
          <General />
        </div>
        {/* <div class="view">
          <TemBox temTitle="驻村指导风采"></TemBox>
        </div>
        <div class="view">
          <TemBox temTitle="乡贤理事会"></TemBox>
        </div>
        <div class="view">
          <TemBox temTitle="党组织活动"></TemBox>
        </div> */}
      </div>
    );
  },
});
