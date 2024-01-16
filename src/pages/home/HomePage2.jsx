import React from "react";

import ArahasLogo from "assets/Arahas-Logo Clear.png";
import ADALogo from "assets/ADA2023.png";

import styles from "./styles.module.css";

import { Card, Col, Layout, Row } from "antd";
import { kpiItemsHome } from "constants/kpiRoutes";
import { useNavigate } from "react-router-dom";

import CircularMenu from "components/homepage/CircularMenu";

const { Header, Content } = Layout;

function HomePage2() {
  const navigation = useNavigate();

  const renderCircles = () => {
    return kpiItemsHome.map((card, index) => {
      const rotation = (index * (360 / kpiItemsHome.length)) % 360; // Calculate rotation based on the number of cards
      const transformStyle = `rotate(${rotation}deg) translateX(220px)`; // Adjust as needed
      return (
        <div
          key={card.path}
          className={styles.iconCard}
          onClick={() => navigation(card.path)}
          style={{
            transform: transformStyle,
          }}
        >
          {card.icon}
          <p>{card.label}</p>
        </div>
      );
    });
  };

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <img src={ADALogo} alt="ada-logo" className={styles.logo} />
          <h2>Vedic Sustainable City Index</h2>
          <img src={ArahasLogo} alt="arahas-logo" className={styles.logo} />
        </Header>
        <Content className={styles.container}>
          <div className={styles.contentContainer}>
            {/* <Row gutter={[16, 16]} className={styles.heroSection}>
              <Col xs={24} md={12} lg={8} style={{ maxHeight: "100%" }}>
                <div id="lottie">
                  <img
                    src={require("assets/svg/SDG11.svg").default}
                    alt="SDG11"
                    className={styles.SDGImage}
                  />
                </div>
              </Col>

              <Col xs={24} md={12} lg={8} align="middle" justify>
                <Card style={{ marginTop: 10 }}>
                  <div className={styles.ayodhyaImageContainer}>
                    <img
                      className={styles.ayodhyaImage}
                      src={require("assets/ADA-VSCI.png")}
                      alt="Ayodhya"
                    />
                  </div>
                </Card>
              </Col>
            </Row> */}

            <div className={styles.circlesContainer}>{renderCircles()}</div>

            {/* <div className={styles.statusContainer}>
              {kpiItemsHome.map((item) => {
                return (
                  <div
                    key={item.path}
                    className={styles.iconCard}
                    onClick={() => navigation(item.path)}
                  >
                    {item.icon}
                    {item.label}
                  </div>
                );
              })}
            </div> */}
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default HomePage2;
