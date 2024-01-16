import React from "react";

import UnderConstructionImage from "assets/images/Ayodhya-Under Construction.svg";
import ArahasLogo from "assets/Arahas-Logo Clear.png";
import ADALogo from "assets/ADA2023.png";

import styles from "./styles.module.css";

import { Layout } from "antd";

const { Header, Content } = Layout;

function UnderConstruction() {
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <img src={ADALogo} alt="ada-logo" className={styles.logo} />
          <h2>Ayodhya - VSCI</h2>
          <img src={ArahasLogo} alt="arahas-logo" className={styles.logo} />
        </Header>
      </Layout>
      <Content>
        <div className={styles.centerImage}>
          <img src={UnderConstructionImage} alt="Under-Construction" />
        </div>
      </Content>
    </>
  );
}

export default UnderConstruction;
