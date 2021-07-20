import { myinterval } from "@/utils/tool";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "canvas",
  setup() {
    const mycanvas = ref<HTMLCanvasElement | null>(null);
    // 获取当前画笔
    const getCtx = () => {
      return mycanvas.value?.getContext("2d") as CanvasRenderingContext2D;
    };
    // 绘制时钟
    const drawClock = (ctx: CanvasRenderingContext2D) => {
      ctx.save();
      ctx.clearRect(0, 0, 600, 600);
      ctx.translate(300, 300);
      ctx.save(); // 存储当前状态
      ctx.beginPath();
      ctx.arc(0, 0, 100, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
      // 画小圆
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
      // 获取当前时分秒
      const time = new Date();
      const hour = time.getHours() % 12;
      const min = time.getMinutes();
      const sec = time.getSeconds();
      // 时针
      ctx.rotate(((2 * Math.PI) / 12) * hour + ((2 * Math.PI) / 12) * (min / 60) - Math.PI / 2);
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(40, 0);
      ctx.lineWidth = 10;
      ctx.stroke();
      ctx.closePath();
      // 恢复成上一次save的状态
      ctx.restore();
      // 分针
      ctx.save();
      ctx.rotate(((2 * Math.PI) / 60) * min + ((2 * Math.PI) / 60) * (sec / 60) - Math.PI / 2);
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(60, 0);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.closePath();
      // 恢复成上一次save的状态
      ctx.restore();
      // 秒针
      ctx.save();
      ctx.rotate(((2 * Math.PI) / 60) * sec - Math.PI / 2);
      ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(80, 0);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      ctx.save();

      // 绘制刻度线,小刻度
      ctx.lineWidth = 1;
      for (let i = 0; i < 60; i++) {
        ctx.rotate((2 * Math.PI) / 60);
        ctx.beginPath();
        ctx.moveTo(90, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
      // 大刻度
      ctx.save();
      ctx.lineWidth = 5;
      for (let i = 0; i < 12; i++) {
        ctx.rotate((2 * Math.PI) / 12);
        ctx.beginPath();
        ctx.moveTo(85, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
      ctx.restore();
    };
    // 绘制大小⚪
    onMounted(() => {
      const ctx = getCtx();
      myinterval(() => {
        drawClock(ctx);
      }, 1000).start();
    });
    return () => <canvas ref={mycanvas} width="600" height="600"></canvas>;
  },
});
