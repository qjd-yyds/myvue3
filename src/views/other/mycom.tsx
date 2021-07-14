import { defineComponent } from "vue";
export default defineComponent({
  name: "Mycom",
  emits: ["event"],
  setup(props, { emit }) {
    function sendData() {
      emit("event", "子组件传递的数据");
    }
    return () => (
      <div>
        <span>自定义事件</span>
        <button onClick={sendData}>传递数据</button>
      </div>
    );
  },
});
