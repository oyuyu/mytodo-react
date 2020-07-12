import React from "react";
import ReactDOM from "react-dom"; //项目运行的核心
import App from "./App";

// 把组件挂载到某个DOM节点上     直接通过标签形式使用自定义组件    组件名以大写字母开头
// 只去渲染id=root的节点
ReactDOM.render(<App />, document.getElementById("root"));
