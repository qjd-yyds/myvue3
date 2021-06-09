import { ElMessage } from "element-plus";

export interface IElToast {
  message: string;
  type: "success" | "warning" | "error" | "info";
  duration?: number;
}

// 消息弹窗
export const ElToast = (option: IElToast): void => {
  const { message = "这是弹窗文本", type = "info", duration = 2000 } = option;
  ElMessage({
    message,
    type,
    duration,
  });
};

// 创建时间戳
type dateValue = string | number;
export function formatDateTime(value: Date, format: string): string {
  const date: Date = new Date(value);
  let text: typeof format = format;

  type YYMMDD = "YY" | "MM" | "DD" | "hh" | "mm" | "ss";

  type TdateFormat = Record<YYMMDD, dateValue> & {
    [propName: string]: any;
  };

  const dateFormat: TdateFormat = {
    YY: supZero(date.getFullYear()),
    MM: supZero(date.getMonth() + 1),
    DD: supZero(date.getDate()),
    hh: supZero(date.getHours()),
    mm: supZero(date.getMinutes()),
    ss: supZero(date.getSeconds()),
  };

  for (const key in dateFormat) {
    if (text?.includes(key)) {
      const reg = new RegExp(key);
      text = text.replace(reg, dateFormat[key]);
    }
  }
  return String(text);
}

// 判断环境
export const isProd = (): boolean => {
  return process.env.NODE_ENV === "production";
};

// 日期时间补0
export function supZero(value: number): dateValue {
  return Number(value) < 10 ? "0" + value : value;
}

// 节流函数
type Ithrottle = (this: any, fn: any, delay: number) => any;

export const throttle: Ithrottle = function (this, fn, delay) {
  const that = this;
  let throttleTimer = Date.now();
  return function (...args: any) {
    let now: number | null = null;
    now || (now = Date.now());
    if (now - throttleTimer > delay) {
      fn.call(that, ...args);
      throttleTimer = now;
    }
  };
};

// 转换范围经纬度
export const conversionRange = function (range: string): number[][] {
  return range.split(";").map((e) => [+e.split(",")[0], +e.split(",")[1]]);
};
// 将单维数组切割二维数组
export function cutArray(arr: any[], num: number) {
  const result: any[] = [];
  const len = arr.length;
  for (let i = 0; i < len; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}

export function regRgb(value: string) {
  // 正则匹配rgb（0,0,0） 里的数据
  const reg = /rgb\((.*)\)/;
  return value
    .replace(reg, "$1")
    .split(",")
    .map((item) => {
      return +item;
    });
}
