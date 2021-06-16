import { EChartsType, init, EChartsOption } from "echarts";
class UseEcharts {
  instant: EChartsType;
  private autoTimer: NodeJS.Timeout | null;
  constructor(dom: HTMLElement) {
    this.instant = null!;
    this.autoTimer = null;
    this.initializeDom(dom);
  }
  // 初始化chart实例
  initializeDom(dom: HTMLElement) {
    this.instant = init(dom);
  }
  // 绘制图表
  createChart(options: EChartsOption) {
    this.instant.setOption(options);
  }
}

export { UseEcharts };
