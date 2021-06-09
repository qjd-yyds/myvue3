import { defineComponent } from "vue";
import "./style.scss";

export default defineComponent({
  name: "pageHeader",
  props: {
    headerIcon: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    function gopage() {
      console.log(1);
    }
    const headerstyle = {
      backgroundImage: `url(${props.headerIcon})`,
    };
    return () => (
      <div class="page-header" style={headerstyle}>
        <span class="page-header-smallsize clip" onClick={gopage}>
          一图智治
        </span>
        <span class="page-header-bigsize clip">/棠棣视窗</span>
      </div>
    );
  },
});
