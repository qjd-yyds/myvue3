export interface IformatNumber {
  num: number | string;
  decimals: number;
  decimal: string;
  separator: string;
  prefix: string;
  suffix: string;
}
export type IeasingFn = (
  progress: number,
  StartVal: number,
  diff: number,
  duration: number,
) => number;
// 格式化小数点
export const formatNumber = (arg: IformatNumber): string => {
  let num = (arg.num as number).toFixed(arg.decimals);
  num += "";
  const x = num.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? arg.decimal + x[1] : "";
  const reg = /(\d+)(\d{3})/;
  if (arg.separator && !isNumber(arg.separator)) {
    while (reg.test(x1)) {
      x1 = x1.replace(reg, "$1" + arg.separator + "$2");
    }
  }
  return arg.prefix + x1 + x2 + arg.suffix;
};
// 判断是否是数字
export const isNumber = (val: any): boolean => {
  return !Number.isNaN(parseFloat(val));
};

// 动画函数
export const easingFn: IeasingFn = (progress, StartVal, diff, duration) => {
  return (diff * (-Math.pow(2, (-10 * progress) / duration) + 1) * 1024) / 1023 + StartVal;
};
