import NotificationConstructor from "./index.vue";
import { createVNode, render, isVNode } from "vue";
let seed = 1;
export function Notification(options: ObjectBase) {
  const container = document.createElement("div");
  const id = "notification_" + seed++;
  options = {
    ...options,
    id,
  };
  const vm = createVNode(
    NotificationConstructor,
    options,
    isVNode(options.message)
      ? {
          default: () => options.message,
        }
      : null,
  );
  console.log(vm);
  render(vm, container);
  document.body.appendChild(container.firstElementChild as Element);
}
