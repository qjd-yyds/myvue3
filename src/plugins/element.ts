import { App } from "vue";
import ch from "element-plus/lib/locale/lang/zh-cn";
// import en from "element-plus/lib/locale/lang/en";
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale";
// 设置语言
locale.use(ch);
import {
  ElButton,
  ElSelect,
  ElImage,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElPopover,
  ElMessage,
  ElForm,
  ElFormItem,
  ElLoading,
  ElInput,
  ElTooltip,
  ElDialog,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElCalendar,
} from "element-plus";

/**
 *  系统的全局设置size，全部加载方便设置。
 */
import "element-plus/lib/theme-chalk/index.css";
// import i18n from '@/locales';
// import { useStore } from '@/store';
export default function loadComponent(app: App): void {
  // app.use(ElementPlus, { size: useStore().state.app.size, i18n: i18n.global.t });
  // app.use(ElementPlus);
  app.use(ElButton);
  app.use(ElSelect);
  app.use(ElBreadcrumb);
  app.use(ElBreadcrumbItem);
  app.use(ElIcon);
  app.use(ElDropdown);
  app.use(ElDropdownMenu);
  app.use(ElDropdownItem);
  app.use(ElPopover);
  app.use(ElForm);
  app.use(ElFormItem);
  app.use(ElLoading);
  app.use(ElInput);
  app.use(ElTooltip);
  app.use(ElDialog);
  app.use(ElScrollbar);
  app.use(ElMenu);
  app.use(ElSubmenu);
  app.use(ElMenuItem);
  app.use(ElImage);
  app.use(ElCalendar);

  app.config.globalProperties.$message = ElMessage;
}
