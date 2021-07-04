import { reactive, ref } from "vue";
import { apiCaptcha } from "@/api/user";
import { useStore } from "vuex";
import { useHandleRouter } from "@/hooks/useRouter";

function useLogin() {
  const store = useStore();
  const { router } = useHandleRouter();
  const form = reactive({
    username: "admin", // 用户名
    password: "admin123", // 密码
    uuid: "", // 校验码uid
    code: "", // 校验码
  });
  const ruleFormEl = ref<HTMLFormElement | null>(null);
  // 获取验证码
  const capImage = ref("");
  // 获取验证码
  const getCapImage = () => {
    apiCaptcha().then(({ code, img, uuid }) => {
      if (code === 200) {
        capImage.value = "data:image/jpg;base64," + img;
        form.uuid = uuid;
      }
    });
  };
  getCapImage();
  const setLogin = () =>
    store.dispatch("login", {
      username: form.username,
      password: form.password,
      uuid: form.uuid,
      code: form.code,
    });
  // 登录模块
  const regist = async () => {
    const blogin = await setLogin();
    if (blogin) {
      router.replace({
        name: "Home",
      });
    } else {
      form.code = "";
      getCapImage();
    }
  };
  return {
    regist,
    form,
    ruleFormEl,
    getCapImage,
    capImage,
  };
}
export { useLogin };
