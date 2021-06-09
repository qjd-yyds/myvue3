/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  // title,
  devPort,
} = require("./src/config/vue.custom.config");
module.exports = {
  publicPath,
  assetsDir,
  outputDir,
  lintOnSave,
  transpileDependencies,
  devServer: {
    hot: true,
    port: devPort,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  pluginOptions: {
    // "style-resources-loader": {
    //   preProcessor: "scss",
    //   patterns: [
    //     path.resolve(__dirname, "src/styles/_variables.scss"),
    //     path.resolve(__dirname, "src/styles/_mixins.scss"),
    //   ],
    // },
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@": path.resolve("src"),
          "*": path.resolve(""),
        },
      },
      // module: {
      //   rules: [
      //     {
      //       test: /\.(json5?|ya?ml)$/, // target json, json5, yaml and yml files
      //       loader: "@intlify/vue-i18n-loader",
      //       include: [
      //         // Use `Rule.include` to specify the files of locale messages to be pre-compiled
      //         path.resolve(__dirname, "src/lang"),
      //       ],
      //     },
      //   ],
      // },
    };
  },
};
