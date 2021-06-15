<template>
  <div class="btn">
    我是测试组件
    <other @click="test" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import other from "./other.vue";

export default defineComponent({
  name: "index",
  props: {},
  emits: ["click"],
  components: {
    other,
  },
  methods: {
    test() {
      console.log(1);
    },
  },
});
</script>

<style scoped lang="scss">
.btn {
  padding: 0 30px;
  background-color: #fff;
}
</style>
