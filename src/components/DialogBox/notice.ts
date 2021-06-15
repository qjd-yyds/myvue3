/* eslint-disable */
import NotificationConstructor from "./index.vue";
import { createVNode, render, isVNode, VNode } from "vue";
import { Position, NotificationQueue } from "./notice.type";
const notifications: Record<Position, NotificationQueue> = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": [],
};
let seed = 1;
const GAP_SIZE = 16;
export function Notification(options: ObjectBase) {
  const container = document.createElement("div");
  const id = "notification_" + seed++;
  const position: Position = options.position || "top-right";
  let verticalOffset = options.offset || 0;
  notifications[position].forEach(({ vm }) => {
    verticalOffset += (vm.el?.offsetHeight ?? 0) + GAP_SIZE;
  });
  verticalOffset += GAP_SIZE;
  options = {
    ...options,
    onClose: () => {
      close(id, position);
    },
    offset: verticalOffset,
    id,
    zIndex: 12,
  };
  // 创建当前vdom
  const vm = createVNode(
    NotificationConstructor,
    options,
    isVNode(options.message)
      ? {
          default: () => options.message,
        }
      : null,
  );
  // 清空当前容器
  vm.props!.onDestroy = () => {
    render(null, container);
  };
  // 渲染
  render(vm, container);
  notifications[position].push({ vm });
  document.body.appendChild(container.firstElementChild as Element);
  setTimeout(() => {
    close(id, position);
  }, 5 * 1000);
}
/**
 * 删除vnode
 * @param {String} id 需要删除的id
 * @param {Position} position 方向
 * @param {Function} userOnClose callback
 */
export function close(id: string, position: Position, userOnClose?: (vm: VNode) => void) {
  // 获取当前删除的索引
  const orientedNotifications = notifications[position];
  const idx = orientedNotifications.findIndex(({ vm }) => {
    return vm.component?.props.id === id;
  });
  if (idx === -1) return;
  const { vm } = orientedNotifications[idx];
  if (!vm) return;
  // 如果存在执行callback
  userOnClose?.(vm);

  // 删除数据
  const removedHeight = vm.el?.offsetHeight;
  const verticalPos = position.split("-")[0];
  orientedNotifications.splice(idx, 1);
  const len = orientedNotifications.length;
  document.getElementById(id)?.remove();
  if (len < 1) return;
  // 开始删除当前
  for (let i = idx; i < len; i++) {
    // 每次删除dom 赋值便宜量
    const { el, component } = orientedNotifications[i].vm;
    const pos = parseInt(el?.style[verticalPos], 10) - removedHeight - GAP_SIZE;
    component!.props.offset = pos;
  }
}
