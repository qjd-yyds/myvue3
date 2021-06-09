import { defineComponent, reactive, ref } from "vue";
import postImage from "./img/video-cover.jpeg";
import "./style.scss";
import { apiCaptcha } from "@/api/user";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();
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
      capImage,
      ruleFormEl,
      form,
      getCapImage,
    };
  },
  render() {
    return (
      <div class="login">
        <video poster={postImage} loop autoplay muted>
          <source src={require("./img/night.mp4")} />
        </video>
        <div class="login-box">
          <el-form ref="ruleFormEl" model={this.form}>
            <el-form-item>
              <el-input
                vModel={this.form.username}
                prefix-icon="el-icon-user"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                vModel={this.form.password}
                prefix-icon="el-icon-lock"
                show-password
                placeholder="请输入密码"
                type="password"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <div class="verification">
                <el-input
                  vModel={this.form.code}
                  prefix-icon="el-icon-lock"
                  placeholder="请输入验证码"
                ></el-input>
                <el-image
                  class="verification-image"
                  src={this.capImage}
                  onClick={this.getCapImage}
                ></el-image>
              </div>
            </el-form-item>
            <el-button type="primary" class="register" onClick={this.regist}>
              登录
            </el-button>
          </el-form>
        </div>
      </div>
    );
  },
});
