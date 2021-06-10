import { ref, onBeforeUnmount } from "vue";

export const useStart = (props: any) => {
  const localStartVal = ref(props.startVal);
  const startTime = ref(null);
  const localDuration = ref(props.duration);
  const paused = ref(false);
  const rAF = ref<number>(0);
  // 滚动入口函数
  const start = (count: any) => {
    // 开始数据付给本地数据
    localStartVal.value = props.startVal;
    // 传入的数据清空
    startTime.value = null;
    // 本地持续时间赋值
    localDuration.value = props.duration;
    // 取消暂停
    paused.value = false;
    // 执行累加函数
    rAF.value = requestAnimationFrame(count);
  };
  onBeforeUnmount(() => {
    cancelAnimationFrame(rAF.value);
  });
  return {
    start,
    localStartVal,
    startTime,
    localDuration,
    paused,
    rAF,
  };
};
