<template>
  <span>
    {{ displayValue }}
  </span>
</template>
<script lang="ts">
import { defineComponent, watch, PropType, onMounted } from 'vue';
import { useStart } from './useStart';
import { useCount } from './useCount';

export default defineComponent({
  name: 'CountTo',
  props: {
    // 开始数字
    startVal: {
      type: Number,
      required: false,
      default: 0
    },
    // 结束数字
    endVal: {
      type: Number,
      required: false,
      default: 2017
    },
    // 持续时间
    duration: {
      type: Number,
      required: false,
      default: 5000
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    decimals: {
      type: Number,
      required: false,
      default: 0,
      // 验证
      validator(value: number) {
        return value >= 0;
      }
    },
    decimal: {
      type: String,
      required: false,
      default: '.'
    },
    // 风格字符
    separator: {
      type: String,
      required: false,
      default: ','
    },
    prefix: {
      type: String,
      required: false,
      default: ''
    },
    suffix: {
      type: String,
      required: false,
      default: ''
    }
  },
  setup(props: any) {
    const { localStartVal, startTime, localDuration, rAF, start } =
      useStart(props);
    const { count, displayValue } = useCount(
      props,
      localStartVal,
      startTime,
      localDuration,
      rAF
    );
    // 监听开始数字变化
    watch(
      () => props.startVal,
      () => {
        if (props.autoplay) {
          start(count);
        }
      }
    );
    // 监听结束数字变化
    watch(
      () => props.endVal,
      () => {
        start(count);
      }
    );
    onMounted(() => {
      // 默认自动滚动
      if (props.autoplay) {
        start(count);
      }
    });
    return {
      displayValue
    };
  }
});
</script>
