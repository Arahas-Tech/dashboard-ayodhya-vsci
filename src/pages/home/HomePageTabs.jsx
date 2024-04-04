import React from "react";

import ArahasLogo from "assets/Arahas-Logo Clear.png";
import ADALogo from "assets/ADA2023.png";

import styles from "./styles.module.css";

import { Badge, Button, Card, Flex, FloatButton, Layout, Tabs } from "antd";
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
          <div className={styles.logos}>
            <a
              className={styles.logo}
              href="https://www.ayodhyada.in"
              target="blank"
            >
              <img src={ADALogo} alt="ada-logo" className={styles.logo} />
            </a>

            <a
              className={styles.logo}
              href="https://www.arahas.com"
              target="blank"
            >
              <img src={ArahasLogo} alt="arahas-logo" height="40" />
            </a>
          </div>

          <h2 className="header-text">Vedic City Sustainability Index</h2>

          <Button
            type="primary"
            href="https://arahas-data-upload-front.vercel.app"
          >
            Login
          </Button>
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
                <Badge.Ribbon placement="start" text="VCSI: 68">
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

        {/* <div className="partnerLogo">
          <Flex align="center" gap={5}>
            <b>Partner: </b>{" "}
            <img
              height="30"
              src={require("assets/Logimetrix_Logo_19012024.png")}
              alt="Logimetrix"
            />
          </Flex>
        </div> */}
      </Layout>
    </>
  );
}

export default HomePageTabs;
