var path = require('path');
var pkgcfg1 = require("./packages/package1/webpack.config.js");
var pkgcfg2 = require("./packages/package2/webpack.config.js");

console.debug(pkgcfg1);
console.debug(pkgcfg2);

module.export = [pkgcfg1(path.resolve(__dirname, "./packages/package1"))];