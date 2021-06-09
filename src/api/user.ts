import { ICaptchaData } from "./model/userData";
import { request, METHODS } from "@/utils/http";
// 获取验证码
export const apiCaptcha = () =>
  request<ICaptchaData>({
    url: "/captchaImage",
  });

// 用户登录
export const apiRegist = (data: any) =>
  request({
    url: "/login",
    data,
    method: METHODS.POST,
  });
