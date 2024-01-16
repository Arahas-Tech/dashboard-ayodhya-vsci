import React from "react";

import ArahasLogo from "assets/Arahas-Logo Clear.png";
import ADALogo from "assets/ADA2023.png";
import PM from "assets/images/PM.jpg";
import CM from "assets/images/CM.jpg";
import VC from "assets/images/VC.png";
import styles from "./styles.module.css";

import { Card, Carousel, Col, Layout, Progress, Row } from "antd";
import { kpiItemsHome } from "constants/kpiRoutes";
import { useNavigate } from "react-router-dom";
import SpeechCard from "components/homepage/SpeechCard";
import CircularMenu from "components/homepage/CircularMenu";

const { Header, Content } = Layout;

function HomePage() {
  const navigation = useNavigate();
  const speeches = [
    {
      imgSrc: PM,
      alt: "PM Modi",
      className: styles.speechContainerImage,
      text: "“If any country wants to develop, it has to protect its heritage. We are moving forward with the old and the new.”",
      designation: "Prime Minister of India",
    },
    {
      imgSrc: CM,
      alt: "CM-UP",
      className: styles.speechContainerImage,
      text: "“The dream is to make Ayodhya a foremost spiritual and tourist city on the global stage, in line with Sanatan traditions and as a self-sustaining modern place that strives for pollution free, zero waste and water abundant city.”",
      designation: "Hon’ble CM (UP)",
    },
    {
      imgSrc: VC,
      alt: "VC-ADA",
      className: styles.speechContainerImage,
      text: '"Ayodhya Development Authority envisions the development of a city rooted in Vedic principles, nurturing the well-being of its inhabitants, fostering environmental stewardship, and embodying the UN SDGs."',
      designation: "Municipal Commissioner-Ayodhya & Vice Chairman-ADA",
    },
  ];

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
            <Row gutter={[16, 16]} className={styles.heroSection}>
              <Col xs={24} lg={12} style={{ maxHeight: "100%" }}>
                {/* <div id="lottie">
                  <img
                    src={require("assets/svg/SDG11.svg").default}
                    alt="SDG11"
                    className={styles.SDGImage}
                  />
                </div> */}

                <Carousel
                  autoplay
                  dotPosition="right"
                  className={styles.carousel}
                >
                  {speeches.map((speech) => {
                    return (
                      <SpeechCard
                        key={speech.alt}
                        imgSrc={speech.imgSrc}
                        alt={speech.alt}
                        text={speech.text}
                        designation={speech.designation}
                      />
                    );
                  })}
                </Carousel>

                <Card style={{ marginTop: 10 }}>
                  <div className={styles.ayodhyaImageContainer}>
                    <img
                      className={styles.ayodhyaImage}
                      src={require("assets/ADA_Boundary.svg").default}
                      alt="Ayodhya"
                    />
                  </div>
                </Card>
              </Col>

              <Col xs={24} lg={12}>
                <img
                  className={styles.heroImage}
                  src={require("assets/HeroImage.svg").default}
                  alt="Sustainable Ayodhya"
                />
                <Card title="Overall KPI Score" className={styles.kpiScore}>
                  <Progress type="dashboard" percent={88} />
                </Card>
              </Col>
            </Row>

            <h2 className={styles.subHeading}>
              KPIs Description - Vedic Sustainable City Index
            </h2>

            <CircularMenu />
            <div className={styles.statusContainer}>
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
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default HomePage;
