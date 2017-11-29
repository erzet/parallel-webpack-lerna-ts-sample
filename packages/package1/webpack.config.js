const path = require("path");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = ctx => {
  return {
    context: ctx,
    node: {
      __filename: true,
      __dirname: true
    },
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      plugins: [new TsConfigPathsPlugin({
        configFileName: path.resolve(ctx, "./tsconfig.json") 
      })]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader", options: {configFileName: path.resolve(ctx, "./tsconfig.json")} },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    }
  };
};
