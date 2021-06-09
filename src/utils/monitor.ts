// 监听 Dom 变化保持缩放比
export const MonitorDom = (proportion: string) => {
  const sizeList = proportion.split(',');
  const targetWidth = +sizeList[0];
  const targetHeight = +sizeList[1];
  const el = document.querySelector('#app') as HTMLElement;
  const handler = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xScale = width / targetWidth;
    const yScale = height / targetHeight;
    // const scale = `${xScale}, ${yScale}`;
    const scale = `${xScale}`;
    el.style.cssText = `transform: scale(${scale});`;
  };
  handler();
  window.addEventListener('resize', handler);
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', handler);
  });
};
