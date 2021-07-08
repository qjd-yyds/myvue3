import { defineComponent } from "vue";
import "./style.scss";
export default defineComponent({
  name: "Other",
  directives: {
    drag: {
      mounted(el: HTMLDivElement, { value }) {
        console.log(value);
        // const { callback } = value;
        // dom当前位子
        let rectLeft = 0;
        let rectTop = 0;
        // 鼠标按下
        let beginX = 0;
        let beginY = 0;
        // 鼠标移动
        let endX = 0;
        let endY = 0;
        let moveX = endY - beginY + rectTop;
        let moveY = endX - beginX + rectLeft;
        // 是否移动
        // let bmove = false;
        el.onmousedown = (e) => {
          // bmove = false;
          rectLeft = el.offsetLeft;
          rectTop = el.offsetTop;
          console.log(rectLeft, rectTop, "当前滑块的位置");
          beginX = e.clientX;
          beginY = e.clientY;
          console.log(beginX, beginY, "鼠标开始点");
          document.onmousemove = (ev) => {
            // bmove = true;
            endX = ev.clientX;
            endY = ev.clientY;
            moveX = endX - beginX + rectTop;
            moveY = endY - beginY + rectLeft;
            el.style.transform = `translate(${moveX}px,${moveY}px)`;
            // el.style["top"] = moveX + "px";
            // el.style["left"] = moveY + "px";
          };
          document.onmouseup = () => {
            // callback && callback(bmove);
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
