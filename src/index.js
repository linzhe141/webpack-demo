// import() 中的动态表达式
// 不可能使用完全动态的导入语句，例如 import(foo)。
// 因为 foo 可能是系统或项目中任何文件的任何路径。
const moduleName = "test";
//! import() 必须至少包含一些有关模块所在位置的信息。
//! 当前会把./ 目录下所有的js文件都进行打包，比如y.js
const x = import(`./${moduleName}.js`);
// const x = import('./test.js');
console.log("xxxxxxxxx", x);
