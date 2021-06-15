import { defineComponent } from "vue";
import General from "./general";
import ChartDemo from "./chartDemo/index.vue";
import "./style.scss";
import { getDict } from "@/hooks/usedict";

export default defineComponent({
  name: "Party",
  setup() {
    getDict("dwsEventType");
    return () => (
      <div class="view-container">
        <div class="view">
          <General />
        </div>
        <div class="view">
          <ChartDemo />
        </div>
      </div>
    );
  },
});
