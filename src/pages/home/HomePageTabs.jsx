import React from "react";

import ArahasLogo from "assets/Arahas-Logo Clear.png";
import ADALogo from "assets/ADA2023.png";

import styles from "./styles.module.css";

import { Badge, Card, Flex, FloatButton, Layout, Tabs } from "antd";
import { kpiItemsHome } from "constants/kpiRoutes";

import { useNavigate } from "react-router-dom";
import Disclaimer from "utils/Disclaimer";
import { HomeOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

function HomePageTabs() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <img src={ADALogo} alt="ada-logo" className={styles.logo} />
          <h2 className="header-text">Vedic City Sustainablility Index</h2>
          <img src={ArahasLogo} alt="arahas-logo" height="40" />
        </Header>

        <Content className={styles.container}>
          <Tabs defaultActiveKey="Green Spaces and Biodiversity" type="card">
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
                <Badge.Ribbon placement="start" text="VCSI: 77">
                  <Card>{item.children}</Card>
                </Badge.Ribbon>
              </TabPane>
            ))}
          </Tabs>
        </Content>

        <Disclaimer language={true} />
        <FloatButton
          tooltip="Home"
          icon={<HomeOutlined />}
          type="primary"
          onClick={handleNavigateHome}
        />
      </Layout>
    </>
  );
}

export default HomePageTabs;