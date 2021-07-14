import { defineComponent } from "vue";
import "./style.scss";
export default defineComponent({
  name: "Drag",
  render() {
    return <div class="rect" v-drag></div>;
  },
});
