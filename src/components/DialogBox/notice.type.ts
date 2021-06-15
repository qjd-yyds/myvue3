import type { VNode } from "vue";
export type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";
export type NotificationVM = VNode;

type NotificationQueueItem = {
  vm: NotificationVM;
};

export type NotificationQueue = Array<NotificationQueueItem>;
