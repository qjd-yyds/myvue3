import { createStore } from "vuex";
import { apiRegist } from "@/api/user";
import { encrypt } from "@/utils/jsencrypt";
import { setToken } from "@/utils/auth";

export interface Iuser {
  token: string | null;
}
export interface userForm {
  username: string;
  password: string;
  uuid: string | number;
  code: string | number;
}
const user = createStore<Iuser>({
  state() {
    return {
      token: sessionStorage.getItem("token") || null,
    };
  },
  mutations: {
    SET_TOKEN(state, data) {
      sessionStorage.setItem("token", data);
      state.token = data;
    },
  },
  actions: {
    // 用户登录
    async login(context: any, data: userForm) {
      const { username, password, uuid, code } = data;
      const res = await apiRegist({
        username,
        password: encrypt(password),
        uuid,
        code,
      });
      if (res.code === 200) {
        setToken(res.token as string);
        return true;
      }
      return false;
    },
  },
});

export default user;
