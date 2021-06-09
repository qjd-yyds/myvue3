import { defineComponent } from "vue";
import { useGuid } from "./useGuid";
import PathBox from "./pathbox";
import "./style.scss";

export default defineComponent({
  name: "Home",
  setup() {
    const { list } = useGuid();
    return () => (
      <>
        <div class="home">
          <ul class="ul">
            {list.value.map((item) => (
              <PathBox item={item} />
            ))}
          </ul>
        </div>
      </>
    );
  },
});
