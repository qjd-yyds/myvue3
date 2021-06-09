import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PathBox",
  props: ["item"],
  setup() {
    const router = useRouter();
    const jump = (item: any) => {
      const { path, type } = item;
      if (type === "other") {
        if (path) {
          window.open(path);
        }
        return;
      }
      router.push({ path });
    };
    return {
      jump,
    };
  },
  render() {
    return (
      <li class="li" onClick={() => this.jump(this.item)}>
        <div class="innter-box">
          <el-image src={this.item.img} class="image"></el-image>
          <div class="name">{this.item.name}</div>
          <span class="lt"></span>
          <span class="lb"></span>
          <span class="rt"></span>
          <span class="rb"></span>
        </div>
      </li>
    );
  },
});
