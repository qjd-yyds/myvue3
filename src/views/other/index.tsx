import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "canvas",
  setup() {
    const mycanvas = ref<HTMLCanvasElement | null>(null);
    // // 获取当前画笔
    const getCtx = () => {
      return mycanvas.value?.getContext("2d") as CanvasRenderingContext2D;
    };
    // 绘制大小⚪
    onMounted(() => {
      const ctx = getCtx();
      console.log(ctx);
    });
    return () => (
      <>
        <canvas ref={mycanvas} width="400" height="100"></canvas>
        <div class="text">谢谢惠顾</div>
      </>
    );
  },
});
