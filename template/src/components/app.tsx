import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "antd";
import Left from "./layout/menu";
import Heads from "./layout/head";
import Content from "./layout/content";

const App = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <HashRouter>
      <Layout style=\{{ height: "100vh" }}>
        <Left
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        />
        <Layout className="site-layout">
          <Heads />
          <Content />
        </Layout>
      </Layout>
    </HashRouter>
  );
};

export default App;
