import React from "react";

import ArahasLogo from "assets/Arahas-Logo Clear.png";
import ADALogo from "assets/ADA2023.png";

import styles from "./styles.module.css";

import { Badge, Card, Flex, Layout, Tabs } from "antd";
import { kpiItemsHome } from "constants/kpiRoutes";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

function HomePageTabs() {
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <img src={ADALogo} alt="ada-logo" className={styles.logo} />
          <h2 className="header-text">Vedic City Sustainablility Index</h2>
          <img src={ArahasLogo} alt="arahas-logo" height="40" />
        </Header>
        <Content className={styles.container}>
          <Tabs defaultActiveKey="Water Conservation" type="card">
            {kpiItemsHome.map((item) => (
              <TabPane
                tab={
                  <Flex style={{ margin: 0 }}>
                    {item.icon}
                    <span style={{ marginLeft: 8 }}>{item.label}</span>
                  </Flex>
                }
                key={item.label}
              >
                <Badge.Ribbon text="VSCI: 80">
                  <Card>{item.children}</Card>
                </Badge.Ribbon>
              </TabPane>
            ))}
          </Tabs>
        </Content>
      </Layout>
    </>
  );
}

export default HomePageTabs;
