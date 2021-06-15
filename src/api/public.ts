import { request } from "@/utils/http";
import { IGetdict } from "./model/usePublic";

// 公共字典接口
export const getdictBytype = (data: ObjectBase) =>
  request<IGetdict>({
    url: "/system/dict/data/typePlus",
    params: data,
  });
