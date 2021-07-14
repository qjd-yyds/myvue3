const reuqireContext = require.context("./modules", true, /index\.ts/);
const fileList = reuqireContext.keys();
fileList.forEach((file) => {
  const module = reuqireContext(file);
  console.log(module);
});
