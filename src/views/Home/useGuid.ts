import { ref } from "vue";
export interface Ihomeface {
  name: string;
  path: string;
  img: any;
  type: string;
}
export function useGuid() {
  const list = ref<Ihomeface[]>([
    {
      name: "一图智治",
      path: "/government",
      type: "path",
      img: require("./img/control.png"),
    },
    {
      name: "棠棣视窗",
      path: "/leader",
      type: "path",
      img: require("./img/mobile.png"),
    },
    {
      name: "后台管理系统",
      path: "http://ieac.f3322.net:6004/tdSystem",
      type: "other",
      img: require("./img/control.png"),
    },
    {
      name: "手机管理系统",
      path: "",
      type: "erma",
      img: require("./img/control.png"),
    },
    {
      name: "微信小程序",
      path: "",
      type: "erma",
      img: require("./img/control.png"),
    },
    {
      name: "导游导览系统",
      path: "",
      type: "erma",
      img: require("./img/control.png"),
    },
    {
      name: "兰花物联网系统",
      path: "http://124.91.150.8:7220/#/home",
      type: "other",
      img: require("./img/control.png"),
    },
    {
      name: "越美医保服务",
      path: "/health",
      type: "path",
      img: require("./img/control.png"),
    },
  ]);

  return {
    list,
  };
}
