import { defineComponent } from "vue";

export default defineComponent({
  name: "rightMore",
  props: {
    text: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    function temClick() {
      console.log(1);
    }
    return () => (
      <span class="tembox-header-container-right-more" onClick={temClick}>
        {props.text}
      </span>
    );
  },
});
