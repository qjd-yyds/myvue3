import { request } from "@/utils/http";
import { IgroupData } from "../model/usePartyData";

// // 获取各组织数量
export const ApiGroupNum = () =>
  request<IgroupData>({
    url: "/openApi/dwdBasOrgInfo/selNumberByType",
  });
