import router from '../router';
import { getToken } from '@/utils/auth'; // 获取用户是否登录
const whiteList: Array<string> = ['/login']; // 白名单
router.beforeEach(async (to, from, next) => {
  // 判断用户是否登录
  const hasToken = getToken();
  if (hasToken) {
    /* 已登录 */
    if (to.path === '/login') {
      // 如果用户已经登录 重定向到主页
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    // 判断用户访问的页面是否在白名单中
    if (whiteList.indexOf(to.path) !== -1) {
      // 登录的页面在白名单中直接进入next()
      next();
    } else {
      // 不在则跳转到登录界面
      next(`/login`);
      // ElToast({
      //   message: '还未登录,请先登录!',
      //   type: 'warning',
      //   duration: 1000
      // });
    }
  }
});
