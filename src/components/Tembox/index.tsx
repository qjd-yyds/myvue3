import { defineComponent } from "vue";
import "./style.scss";
// import RightMore from "./rightMore";

export default defineComponent({
  name: "TemBox",
  props: {
    temRight: {
      default: false,
      type: Boolean,
    },
    rightText: {
      default: "查看更多",
      type: String,
    },
    temTitle: {
      default: "暂无标题",
      type: String,
    },
    temWidth: {
      default: 445,
      type: Number,
    },
    temHeight: {
      default: 861,
      type: Number,
    },
  },
  setup(props) {
    const boxStyle = {
      width: props.temWidth + "px",
      height: props.temHeight + "px",
    };
    return () => (
      <div class="tembox" style={boxStyle}>
        <div class="tembox-header">
          <div class="tembox-header-container">
            <span class="tembox-header-container-title">{props.temTitle}</span>
            <span class="tembox-header-container-right">
              {/* {props.temRight ? <RightMore text={props.rightText} /> : <span>//</span>} */}
            </span>
          </div>
        </div>
        <div class="tembox-container">
          <slot></slot>
        </div>
      </div>
    );
  },
});
