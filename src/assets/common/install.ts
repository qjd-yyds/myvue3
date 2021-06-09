const modulesFiles = import.meta.globEager('./*.*');
const reg = /\.\/(.*)\..*/;
const imageCache: ObjectBase = {};
Object.entries(modulesFiles).forEach(([path, module]) => {
  const key = path.replace(reg, '$1');
  imageCache[key] = module.default;
});
export default imageCache;
