import NetworkConfig from "@/config/net.config";
import axios from "axios";
import { getToken } from "./auth";
export enum METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}
export interface IrequestArg {
  url: string;
  params?: any;
  data?: any;
  method?: METHODS;
  ContentType?: EContentType;
}
export type Trequest = <T = any>(arg: IrequestArg) => Promise<RequestParams<T>>;
export enum EContentType {
  form = "application/x-www-form-urlencoded",
  json = "application/json; charset=utf-8",
  multipart = "multipart/form-data",
}
export interface RequestParams<T> extends ObjectBase {
  /**
   * 状态码
   * @type { number }
   */
  code: number;
  /**
   * 数据
   * @type { T }
   */
  data: T;
  /**
   * 用户令牌
   * @type { string }
   */
  token?: string;
  /**
   * 消息
   * @type { any }
   */
  msg: any;
}

const instance = axios.create({
  baseURL: NetworkConfig.host,
  timeout: NetworkConfig.timeout,
});
// 请求拦截
instance.interceptors.request.use(
  (response) => {
    const token = getToken();
    if (token) {
      response.headers.common["Authorization"] = token;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    // 否则的话抛出错误
    return Promise.reject(response);
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      switch (code) {
        case 401:
          console.log("权限不做");
          break;
        case 404:
          console.log("网络请求不存在");
          break;
        default:
      }
    } else {
      console.log("未知");
    }
    return Promise.reject(error);
  },
);
// 接口地址 / 请求参数 / 请求方式 / 请求头信息
const request: Trequest = ({
  url,
  params = {},
  method = METHODS.GET,
  data = {},
  ContentType = EContentType.json,
}) => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      params,
      data,
      method,
      headers: {
        "Content-Type": ContentType,
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => reject(error));
  });
};
export { request };
export default instance;
