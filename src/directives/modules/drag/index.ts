import { ObjectDirective } from "vue";
const drag: ObjectDirective = {
  mounted(el: HTMLDivElement, binding, vnode) {
    el.onmousedown = (ev) => {
      // 鼠标按下的位置
      const mouseXStart = ev.clientX;
      const mouseYStart = ev.clientY;
      // 当前滑块位置
      const rectLeft = el.offsetLeft;
      const rectTop = el.offsetTop;
      document.onmousemove = (e) => {
        // 鼠标移动的位置
        const mouseXEnd = e.clientX;
        const mouseYEnd = e.clientY;
        const moveX = mouseXEnd - mouseXStart + rectLeft;
        const moveY = mouseYEnd - mouseYStart + rectTop;
        el.style["top"] = moveY + "px";
        el.style["left"] = moveX + "px";
      };
      document.onmouseup = () => {
        // 取消事件
        document.onmousemove = null;
      };
    };
  },
};

export default drag;
