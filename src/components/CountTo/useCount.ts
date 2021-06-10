import { ref, computed } from "vue";
import { easingFn, formatNumber } from "./useTool";

export const useCount = (
  props: any,
  localStartVal: any,
  startTime: any,
  localDuration: any,
  rAF: any,
) => {
  const printVal = ref<number | null>(null);
  const displayValue = ref(
    formatNumber({
      num: props.startVal,
      decimals: props.decimals,
      decimal: props.decimal,
      separator: props.separator,
      prefix: props.prefix,
      suffix: props.suffix,
    }),
  );
  const timestamp = ref<number | null>(null);
  // 返回是否倒序累加
  const countDown: any = computed((): boolean => {
    return props.startVal > props.endVal;
  });
  // 累加
  const count = (stamp: number) => {
    // 如果startTime不存在就将
    if (!startTime.value) startTime.value = stamp;
    timestamp.value = stamp;
    const progress = stamp - startTime.value;
    if (countDown.value) {
      printVal.value =
        localStartVal.value -
        easingFn(progress, 0, localStartVal.value - props.endVal, localDuration.value);
    } else {
      printVal.value = easingFn(
        progress,
        localStartVal.value,
        props.endVal - localStartVal.value,
        localDuration.value,
      );
    }
    displayValue.value = formatNumber({
      num: printVal.value,
      decimals: props.decimals,
      decimal: props.decimal,
      separator: props.separator,
      prefix: props.prefix,
      suffix: props.suffix,
    });
    if (progress < localDuration.value) {
      rAF.value = requestAnimationFrame(count);
    }
  };
  return {
    count,
    displayValue,
  };
};
