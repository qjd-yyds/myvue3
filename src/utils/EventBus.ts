class EventBus {
  _cache: ObjectBase;
  constructor() {
    this._cache = {};
  }
  // 监听事件
  on(type: string, fn: Function) {
    let list = this._cache[type] || [];
    if (list.find((e: any) => e === fn)) {
      // 判断函数是否重复监听
      throw Error('事件重复监听');
    }
    list.push(fn);
    this._cache[type] = list;
  }
  // 关闭事件
  off(type: string, fn: Function) {
    let list = this._cache[type] || [];
    if (list instanceof Array && list.length > 0) {
      let index = list.findIndex((e) => e === fn);
      list.splice(index, 1);
    }
    this._cache[type] = list;
  }
  // 触发事件
  emit(type: string, ...args: any[]) {
    let list = this._cache[type];
    if (list instanceof Array && list.length > 0) {
      let len = list.length;
      for (let i = 0; i < len; i++) {
        list[i](...args);
      }
    }
  }
}
export default new EventBus();
