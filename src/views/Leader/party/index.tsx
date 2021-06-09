import { defineComponent } from "vue";
import TemBox from "@/components/Tembox";

export default defineComponent({
  name: "Party",
  setup() {
    return () => (
      <>
        <TemBox></TemBox>
      </>
    );
  },
});
