import { defineComponent, PropType } from "@vue/runtime-core";
import { IgeneralList } from "./type";
import CountTo from "@/components/CountTo";

export default defineComponent({
  name: "GeneralItem",
  props: {
    msg: {
      required: true,
      type: Object as PropType<IgeneralList>,
    },
  },
  setup() {
    const handleshow = () => {
      console.log(1);
    };
    return {
      handleshow,
    };
  },
  render() {
    return (
      <li class="general-box-item" onClick={this.handleshow}>
        <span class="general-box-item-icon"></span>
        <div class="general-box-item-info">
          <span class="general-box-item-info-name">{this.msg.name}</span>
          <span class="general-box-item-info-value">
            <CountTo endVal={this.msg.value} />
          </span>
        </div>
      </li>
    );
  },
});
