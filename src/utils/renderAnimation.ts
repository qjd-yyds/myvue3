class renderAnimation {
  animationList: any[];
  constructor() {
    this.animationList = [];
    this.render();
  }
  render() {
    const len = this.animationList.length;
    for (let index = 0; index < len; index++) {
      this.animationList[index]();
    }
    requestAnimationFrame(() => {
      this.render.call(this);
    });
  }
  add(callback: Function) {
    let fn = this.animationList.find((item) => item === callback);
    if (fn) {
      return;
    }
    this.animationList.push(callback);
  }
  remove(callback: Function) {
    let fnIndex = this.animationList.findIndex((item) => item === callback);
    if (!~fnIndex) {
      return;
    }
    this.animationList.splice(fnIndex, 1);
  }
}

export default new renderAnimation();
