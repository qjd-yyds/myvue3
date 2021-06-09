import { Ref, ref } from "vue";
import partyIcon from "./img/party.png";
import serviceIcon from "./img/service.png";
import governIcon from "./img/govern.png";
import environmentIcon from "./img/environment.png";
import villageIcon from "./img/village.png";
import steamIcon from "./img/steam.png";
import { menuRoute } from "./type";

export function useMenu() {
  const menuList: Ref<Array<menuRoute>> = ref([
    {
      path: "/leader/party",
      name: "乡村党建",
      icon: partyIcon,
    },
    {
      path: "/leader/service",
      name: "乡村服务",
      icon: serviceIcon,
    },
    {
      path: "/leader/govern",
      name: "乡村治理",
      icon: governIcon,
    },
    {
      path: "/leader/environment",
      name: "乡村环境",
      icon: environmentIcon,
    },
    {
      path: "/leader/run",
      name: "乡村经营",
      icon: villageIcon,
    },
    {
      path: "/leader/industry",
      name: "特色产业",
      icon: steamIcon,
    },
  ]);
  return { menuList };
}
