<template>
  <transition name="notice-fade">
    <div class="dialog" v-show="visible">
      <slot>
        {{ message }}
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, VNode } from "vue";

export default defineComponent({
  name: "DialogBox",
  props: {
    message: {
      type: [String, Object] as PropType<string | VNode>,
      default: "",
    },
  },
  setup() {
    let visible = ref(false);
    onMounted(() => {
      visible.value = true;
    });
    return {
      visible,
    };
  },
});
</script>

<style scoped lang="scss">
.dialog {
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
