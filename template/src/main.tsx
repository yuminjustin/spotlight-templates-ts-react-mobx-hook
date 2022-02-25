import "@babel/polyfill";
import "antd/dist/antd.css";
import "B/assets/css/reset.css";
import "B/assets/css/style.css";
/* react*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import App from "C/app";  // webpack 别名
import store from "./stores";

const children = (
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);

render(
  <Provider children={children} {...store} />,
  document.getElementById("app") as HTMLElement
);

/* webpack hot reload*/
if (module.hot) {
  module.hot.accept();
}
