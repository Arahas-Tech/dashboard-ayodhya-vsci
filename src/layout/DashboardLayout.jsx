import React, { useState } from "react";

import ArahasLogo from "assets/Arahas-Logo Clear.png";
import ADALogo from "assets/ADA2023.png";
import styles from "./styles.module.css";

import Icon, { AppstoreAddOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { kpiItemsHome } from "constants/kpiRoutes";
import { NavLink } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Header className={styles.header}>
        <img src={ADALogo} alt="ada-logo" className={styles.logo} />
        <h2>Vedic Sustainable City Index</h2>
        <img src={ArahasLogo} alt="arahas-logo" className={styles.logo} />
      </Header>
      <Layout hasSider>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          className={styles.sidebar}
          theme="dark"
          trigger={collapsed ? <AppstoreAddOutlined /> : <AppstoreOutlined />}
        >
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            selectedKeys={["Waste Management"]}
          >
            {kpiItemsHome.map((item) => (
              <Menu.Item icon={<Icon component={() => item.icon} />}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout
          className={styles.layout}
          style={{
            marginLeft: collapsed ? 80 : 200,
            transition: "margin-left 0.3s",
            marginTop: "5rem",
          }}
          hasSider
        >
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
