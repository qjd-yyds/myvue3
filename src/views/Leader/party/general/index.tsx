import Tembox from "@/components/Tembox";
import { defineComponent, ref } from "@vue/runtime-core";
import { IgeneralList } from "./type";
import "./style.scss";
import GeneralItem from "./generalItem";
import { ApiGroupNum } from "@/api/leader/party";

export default defineComponent({
  name: "General",
  setup() {
    const generalList = ref<IgeneralList[]>([
      {
        name: "党支部人数",
        type: "party",
        value: 0,
      },
      {
        name: "村委会人数",
        type: "village",
        value: 0,
      },
      {
        name: "党员人数",
        type: "partyMember",
        value: 0,
      },
      {
        name: "乡贤人数",
        type: "villageMember",
        value: 0,
      },
    ]);
    ApiGroupNum().then(({ code, data }) => {
      if (code === 200) {
        for (const type in data) {
          const current = generalList.value.find((item) => item.type === type);
          current && (current.value = data[type]);
        }
      }
    });
    return () => (
      <Tembox temTitle="党组织概况" temHeight={246}>
        <div class="general-container">
          <ul class="general-box">
            {generalList.value.map((item) => (
              <GeneralItem msg={item}></GeneralItem>
            ))}
          </ul>
        </div>
      </Tembox>
    );
  },
});
