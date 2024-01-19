import React, { useState } from "react";
import styles from "./styles.module.css";
import ADALogo from "assets/ADA2023.png";
import ArahasLogo from "assets/Arahas-Logo Clear.png";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Carousel,
  Col,
  Flex,
  FloatButton,
  Layout,
  Row,
} from "antd";

import PM from "assets/images/PM.jpg";
import CM from "assets/images/CM.jpg";
import VC from "assets/images/VC.png";

import SpeechCard from "components/homepage/SpeechCard";
import Icon, { ArrowRightOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const Icons = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_70_64)">
      <path
        d="M138.71 137H132.29L120.293 197H150.707L138.71 137Z"
        fill="#FD9D24"
      />
      <path
        d="M467 91H280.717L319.559 402.679C320.246 415.427 316.761 427.429 308.441 436.825L242.663 512H467C491.814 512 512 491.814 512 467V137C512 112.186 491.814 91 467 91ZM467 257H462.994C454.459 284.383 440.924 305.81 426.858 322.702C437.877 332.776 449.66 341.04 461.375 350.296C467.835 355.467 468.89 364.9 463.704 371.375C458.542 377.84 449.072 378.888 442.625 373.704C429.896 363.657 417.948 355.247 406 344.283C394.052 355.247 383.104 363.657 370.375 373.704C363.928 378.888 354.458 377.84 349.296 371.375C344.11 364.9 345.165 355.467 351.625 350.296C363.34 341.04 374.123 332.776 385.142 322.702C371.076 305.811 358.54 284.384 350.006 257H346C337.709 257 331 250.291 331 242C331 233.709 337.709 227 346 227H391V212C391 203.709 397.709 197 406 197C414.291 197 421 203.709 421 212V227H467C475.291 227 482 233.709 482 242C482 250.291 475.291 257 467 257Z"
        fill="#FD9D24"
      />
      <path
        d="M244.164 39.419C241.366 16.948 222.162 0 199.516 0H45C20.186 0 0 20.186 0 45V377C0 401.814 20.186 422 45 422C134.67 422 199.177 422 281.551 422C285.927 416.998 289.595 413.866 289.75 407.337C289.788 405.7 244.367 41.043 244.164 39.419ZM183.944 286.707C175.99 288.344 167.933 283.18 166.293 274.944L156.706 227H114.295L104.708 274.944C103.097 283.059 95.274 288.391 87.057 286.707C78.942 285.081 73.668 277.186 75.294 269.056L105.293 119.056C106.699 112.054 112.852 107 120 107H151C158.148 107 164.301 112.054 165.707 119.056L195.707 269.056C197.333 277.186 192.06 285.081 183.944 286.707Z"
        fill="#FD9D24"
      />
      <path
        d="M175.261 452L177.835 472.581C179.551 486.364 188.709 500.419 203.773 507.437C232.201 476.143 215.002 495.075 254.132 452H175.261Z"
        fill="#FD9D24"
      />
      <rect x="324" y="181" width="173" height="201" fill="#FD9D24" />
      <path
        d="M489.1 208.684V233.169H470.596V347H441.437V297.842H423.12V299.524C423.12 310.614 419.568 319.461 412.466 326.066C405.363 332.67 395.955 335.972 384.242 335.972C375.519 335.972 367.855 334.352 361.251 331.112C354.647 327.748 349.476 323.075 345.737 317.094C342.124 311.112 340.317 304.259 340.317 296.533H367.793C367.793 300.521 369.102 303.885 371.718 306.627C374.46 309.368 378.011 310.739 382.372 310.739C386.734 310.739 390.161 309.43 392.653 306.813C395.27 304.197 396.578 300.77 396.578 296.533C396.578 292.421 395.083 288.932 392.092 286.066C389.226 283.2 384.927 281.767 379.195 281.767H370.784V258.029H379.195C384.055 258.029 387.918 256.845 390.784 254.478C393.65 251.985 395.083 248.808 395.083 244.945C395.083 240.957 393.837 237.78 391.344 235.412C388.977 233.045 385.924 231.861 382.186 231.861C378.198 231.861 374.896 233.045 372.279 235.412C369.787 237.78 368.541 240.833 368.541 244.571H341.438C341.438 237.219 343.12 230.677 346.485 224.945C349.849 219.213 354.585 214.789 360.69 211.674C366.921 208.559 374.086 207.001 382.186 207.001C394.023 207.001 403.494 210.117 410.596 216.347C417.699 222.453 421.251 230.677 421.251 241.02C421.251 247.749 419.506 253.543 416.017 258.403C412.653 263.262 407.793 266.752 401.438 268.87V269.618C405.176 270.614 408.291 271.985 410.783 273.73H441.437V208.684H489.1Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_70_64">
        <rect width="512" height="512" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LoginNew = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(true); //true->english false->hindi

  const speechesEnglish = [
    {
      imgSrc: PM,
      alt: "PM Modi",
      className: styles.speechContainerImage,
      text: "“If any country wants to develop, it has to protect its heritage. We are moving forward with the old and the new.”",
      designation: "Hon'ble Prime Minister of India",
    },
    {
      imgSrc: CM,
      alt: "CM-UP",
      className: styles.speechContainerImage,
      text: "“The dream is to make Ayodhya a foremost spiritual and tourist city on the global stage in line with sanatan tradition and as a self sustaining modern place that strives for pollution free, zero waste and water abundant city”",
      designation: "Hon’ble CM, U.P.",
    },
    {
      imgSrc: VC,
      alt: "VC-ADA",
      className: styles.speechContainerImage,
      text: '"Ayodhya Development Authority envisions the development of a city rooted in Vedic principles, nurturing the well-being of its inhabitants, fostering environmental stewardship, and embodying the UN SDGs."',
      designation: "Municipal Commissioner, Ayodhya & Vice Chairman, ADA",
    },
  ];

  const speechesHindi = [
    {
      imgSrc: PM,
      alt: "PM Modi",
      className: styles.speechContainerImage,
      text: "“अगर कोई राष्ट्र प्रगति करना चाहता है तो उसे अपनी विरासत की रक्षा करनी होगी| हम प्राचीन एवं आधुनिक मूल्यों के साथ विकास के पथ पर निरंतर अग्रसर हैं|”",
      designation: "माननीय प्रधानमंत्री, भारत सरकार",
    },
    {
      imgSrc: CM,
      alt: "CM-UP",
      className: styles.speechContainerImage,
      text: "“अयोध्या धाम  वैश्विक स्तर पर एक प्रमुख आध्यात्मिक और पर्यटन नगरी के रूप में स्थापित हो तथा सनातन परंपराओं का पालन करते हुए यह एक आधुनिक तीर्थ स्थान के साथ प्रदूषण रहित और जलवायु समृद्ध शहर बने।”",
      designation: "माननीय मुख्यमंत्री, उत्तर प्रदेश",
    },
    {
      imgSrc: VC,
      alt: "VC-ADA",
      className: styles.speechContainerImage,
      text: '"अयोध्या विकास प्राधिकरण वैदिक मूल्यों से ओतप्रोत एक ऐसी रामनगरी विकसित करने की कल्पना करता है जो अपने निवासियों की भलाई में निरंतर संलग्न रहे| उन्हें दैहिक, भौतिक तापों से मुक्त रखे| हमेशा उनकी सेवा में तत्पर रहे | चौतरफा हरियाली से घिरे उपवन में उच्चस्तरीय पर्यावरण जागरूकता हो| प्राकृतिक सम्पदा का संरक्षण एवं संवर्धन हर किसी का धर्म हो| पूरा नगर संयुक्तराष्ट्र के सतत विकास लक्ष्यों को हासिल करने के लिए सदैव प्रयत्नशील रहे|"',
      designation: "नगर आयुक्त, अयोध्या एवं उपाध्यक्ष, ए.डी.ए",
    },
  ];

  const handleClick = (e) => {
    navigate("/home");
  };

  const handleTranslate = () => {
    setLanguage(!language);
  };
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <img src={ADALogo} alt="ada-logo" className={styles.logo} />
          <h2 className="header-text">
            {language
              ? "Vedic City Sustainability Index"
              : "वैदिक सतत नगर सूचकांक"}
          </h2>
          <img src={ArahasLogo} alt="arahas-logo" height="40" />
        </Header>

        {language && (
          <Content className={styles.container}>
            <Carousel dots={false} autoplay effect="fade">
              <img
                src={require("assets/images/Ayodhya SDG-Banner-I.png")}
                alt="Banner-I"
                className={styles.bannerImage}
              />
              <img
                src={require("assets/images/Ayodhya SDG-Banner-II.png")}
                alt="Banner-II"
                className={styles.bannerImage}
              />
            </Carousel>

            <Flex className={styles.speeches}>
              {speechesEnglish.map((speech) => {
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
            </Flex>

            <Flex vertical align="center" gap={16}>
              <Row gutter={[8, 8]} align="middle">
                <Col xs={24} md={12} lg={12}>
                  <Card className={styles.cardContent}>
                    <b>
                      Vedic City Sustainability Index involves the development
                      of a set of indicators or criteria to evaluate different
                      aspects of Ayodhya's sustainability, which may include
                      environmental, social, economic, and governance factors.
                      These indicators may cover areas such as air quality,
                      green spaces, energy efficiency, waste management, social
                      inclusivity, economic. prosperity and more.
                    </b>
                  </Card>
                </Col>

                <Col xs={24} md={12} lg={12}>
                  <Card className={styles.cardContent}>
                    <h2 style={{ margin: 0 }}>
                      <span className={styles.vsciScore}>Ayodhya - VCSI:</span>{" "}
                      77
                    </h2>
                  </Card>
                </Col>
              </Row>

              <Button
                size="large"
                className={styles.button}
                type="primary"
                onClick={handleClick}
                icon={<ArrowRightOutlined />}
              >
                View Details
              </Button>
            </Flex>

            <FloatButton
              icon={<Icon component={Icons} />}
              onClick={handleTranslate}
            />
          </Content>
        )}

        {!language && (
          <Content className={styles.container}>
            <Carousel dots={false} autoplay effect="fade">
              <img
                src={require("assets/images/Ayodhya SDG-Banner-I.png")}
                alt="Banner-I"
                className={styles.bannerImage}
              />
              <img
                src={require("assets/images/Ayodhya SDG-Banner-II.png")}
                alt="Banner-II"
                className={styles.bannerImage}
              />
            </Carousel>

            <Flex className={styles.speeches}>
              {speechesHindi.map((speech) => {
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
            </Flex>

            <Flex vertical align="center" gap={16}>
              <Row gutter={[8, 8]}>
                <Col xs={24} md={12} lg={12}>
                  <Card className={styles.cardContent}>
                    <b>
                      वैदिक सस्टेनेबल सिटी इंडेक्स (वैदिक सतत नगर सूचकांक) के
                      तहत सामान्यत: ऐसे सूचकांक या मापदंडों को विकसित किया जाना
                      शामिल है, जो अयोध्या के सतत विकास के विभिन्न पहलुओं का
                      मूल्यांकन करेगा, जिसमें पर्यावरण, सामाजिक, आर्थिक और शासन
                      प्रशासन (गवर्नेंस) के कारक तत्त्व शामिल हो सकते हैं। इन
                      सूचकांकों में वायु गुणवत्ता, हरित स्थल, ऊर्जा कुशलता, कचरा
                      प्रबंधन, सामाजिक समावेश, आर्थिक समृद्धि और अन्य क्षेत्रों
                      को शामिल किया जायेगा।
                    </b>
                  </Card>
                </Col>

                <Col xs={24} md={12} lg={12}>
                  <Card className={styles.cardContent}>
                    <h2>
                      <span className={styles.vsciScore}>Ayodhya - VCSI:</span>{" "}
                      77
                    </h2>
                  </Card>
                </Col>
              </Row>

              <Button
                size="large"
                className={styles.button}
                type="primary"
                onClick={handleClick}
                icon={<ArrowRightOutlined />}
              >
                विवरण देखें
              </Button>
            </Flex>

            <FloatButton
              icon={<Icon component={Icons} />}
              onClick={handleTranslate}
            />
          </Content>
        )}
      </Layout>
    </>
  );
};

export default LoginNew;
