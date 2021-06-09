export interface Icache {
  [key: string]: string;
}
// 全局注入
const modulesFiles = import.meta.globEager('./*.*');
const reg = /\.\/(.*)\..*/;
let imageCache: Icache = {};
Object.entries(modulesFiles).forEach(([path, module]) => {
  const key = path.replace(reg, '$1');
  imageCache[key] = module.default;
});
export default imageCache;
