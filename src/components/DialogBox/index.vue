<template>
  <transition name="notice-fade">
    <div class="notice" :id="id" v-show="visible" :style="positionStyle">
      <slot>
        {{ message }}
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, VNode, computed } from "vue";
import { Position } from "./notice.type";

export default defineComponent({
  name: "notice",
  props: {
    message: {
      type: [String, Object] as PropType<string | VNode>,
      default: "",
    },
    offset: { type: Number, default: 0 },
    zIndex: { type: Number, default: 0 },
    id: { type: String, default: "" },
    position: {
      type: String as PropType<Position>,
      default: "top-right",
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    let visible = ref(false);
    const verticalProperty = computed(() => {
      return props.position.startsWith("top") ? "top" : "bottom";
    });

    const positionStyle = computed(() => {
      return {
        zIndex: props.zIndex,
        [verticalProperty.value]: props.offset + "px",
      };
    });
    onMounted(() => {
      visible.value = true;
    });
    return {
      visible,
      positionStyle,
    };
  },
});
</script>

<style scoped lang="scss">
.notice {
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-block;
  padding: 5px;
  font: 16px bold;
  position: absolute;
  color: #fff;
}
/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.notice-fade-enter-active {
  transition: all 0.3s ease-out;
}

.notice-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.notice-fade-enter-from,
.notice-fade-leave-to {
  right: 0;
  transform: translateX(100%);
  opacity: 0;
}
</style>
