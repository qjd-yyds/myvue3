<template>
  <Tembox tem-title="图标容器" :tem-width="600" :tem-height="400">
    <div class="echarts" ref="chartDom"></div>
  </Tembox>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Tembox from "@/components/Tembox";
import { UseEcharts } from "@/hooks/useEcharts";
import { EChartsOption } from "echarts";

export default defineComponent({
  name: "index",
  props: {},
  setup: () => {
    const chartDom = ref<HTMLElement | null>(null);
    onMounted(() => {
      const usechart = new UseEcharts(chartDom.value as HTMLElement);
      const option: EChartsOption = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      usechart.createChart(option);
    });
    return {
      chartDom,
    };
  },
  components: {
    Tembox,
  },
});
</script>

<style scoped lang="scss">
.echarts {
  height: 300px;
  background: black;
}
</style>
