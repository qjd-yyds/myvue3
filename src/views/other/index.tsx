import { defineComponent } from "vue";
import "./style.scss";
export default defineComponent({
  name: "Drag",
  directives: {
    drag: {
      mounted(el: HTMLDivElement) {
        el.onmousedown = (ev) => {
          console.log(ev);
          // 鼠标按下的位置
          const mouseXStart = ev.clientX;
          const mouseYStart = ev.clientY;
          console.log("按下开始", mouseXStart, mouseYStart);
          // 当前滑块位置
          const rectLeft = el.offsetLeft;
          const rectTop = el.offsetTop;
          document.onmousemove = (e) => {
            // 鼠标移动的位置
            const mouseXEnd = e.clientX;
            const mouseYEnd = e.clientY;
            const moveX = mouseXEnd - mouseXStart + rectLeft;
            const moveY = mouseYEnd - mouseYStart + rectTop;
            console.log(rectLeft, rectTop);
            el.style["top"] = moveY + "px";
            el.style["left"] = moveX + "px";
          };
          document.onmouseup = () => {
            console.log("鼠标抬起");
            // 取消事件
            document.onmousemove = null;
          };
        };
      },
    },
  },
  render() {
    return <div class="rect" v-drag></div>;
  },
});
