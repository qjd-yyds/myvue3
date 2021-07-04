import { defineComponent, getCurrentInstance } from "vue";
import postImage from "./img/video-cover.jpeg";
import style from "./style.module.scss";
import { useLogin } from "./useLogin";
export default defineComponent({
  name: "Login",
  setup() {
    console.log(getCurrentInstance());
    const { regist, form, ruleFormEl, getCapImage, capImage } = useLogin();
    return {
      regist,
      form,
      ruleFormEl,
      getCapImage,
      capImage,
    };
  },
  render() {
    return (
      <div class={style.login}>
        <video poster={postImage} loop autoplay muted>
          <source src={require("./img/night.mp4")} />
        </video>
        <div class={style["login-box"]}>
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
              <div class={style.verification}>
                <el-input
                  vModel={this.form.code}
                  prefix-icon="el-icon-lock"
                  placeholder="请输入验证码"
                ></el-input>
                <el-image
                  class={style["verification-image"]}
                  src={this.capImage}
                  onClick={this.getCapImage}
                ></el-image>
              </div>
            </el-form-item>
            <el-button type="primary" class={style.register} onClick={this.regist}>
              登录
            </el-button>
          </el-form>
        </div>
      </div>
    );
  },
});
