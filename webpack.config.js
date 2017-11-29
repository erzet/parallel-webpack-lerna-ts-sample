var path = require("path");
var webpackMerge = require("webpack-merge");
var pkgcfg1 = require("./packages/package1/webpack.config.js");
var pkgcfg2 = require("./packages/package2/webpack.config.js");

//var _p1 = pkgcfg1(__dirname + "/packages/package1");

console.debug(__dirname);

module.exports = [
  pkgcfg1(path.resolve(__dirname, "./packages/package1/")),
  pkgcfg2(path.resolve(__dirname, "./packages/package2/"))
];
