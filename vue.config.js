// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = {
  transpileDependencies: []
  // chainWebpack: config => {
  //   config.module
  //     .rule("eslint")
  //     .use("eslint-loader")
  //     .options({
  //       fix: true
  //     });
  // }
  // chainWebpack: config => {
  //   config.plugin("monaco-editor").use(MonacoWebpackPlugin, [
  //     {
  //       // Languages are loaded on demand at runtime
  //       languages: ["json", "javascript", "html", "xml"]
  //     }
  //   ]);
  // }
};
