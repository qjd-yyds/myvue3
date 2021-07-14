import { defineComponent } from "vue";
import Mycom from "./mycom";
export default defineComponent({
  name: "Jsx",
  setup() {
    function getSon(msg: string) {
      console.log(msg);
    }
    return () => (
      <div>
        <Mycom {...{ onEvent: getSon }} />
      </div>
    );
  },
});
