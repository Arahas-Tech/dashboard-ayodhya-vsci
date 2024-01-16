import React from "react";
import styles from "./styles.module.css";
import ADALogo from "assets/ADA2023.png";
import ArahasLogo from "assets/Arahas-Logo Clear.png";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import {
  InfoCircleFilled,
  LockOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";

import PM from "assets/images/PM.jpg";
import CM from "assets/images/CM.jpg";
import VC from "assets/images/VC.png";

import SpeechCard from "components/homepage/SpeechCard";

function LoginHome() {
  const speeches = [
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

  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (
      (e.email === "ayodhya@arahas.com" || e.email === "Ayodhya@arahas.com") &&
      e.password === "12345678"
    ) {
      navigate("/home");
    }
  };

  return (
    <>
      <Row
        gutter={[16, 16]}
        className={styles.container}
        justify="space-between"
      >
        <Col lg={15} className={styles.speeches}>
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
        </Col>
        <Col lg={8} className={styles.loginContainer}>
          <div className={styles.logoContainer}>
            <img src={ADALogo} alt="SBM-Logo" style={{ height: 80 }} />
            <img src={ArahasLogo} alt="Emblem-India" style={{ height: 60 }} />
          </div>

          <h3 className={styles.heading}>
            Ayodhya
            <br /> Vedic Sustainable City Index
          </h3>

          <Form
            name="normal_login"
            className={styles.formContainer}
            size="large"
            initialValues={{ email: "", password: "", remember: true }}
            onFinish={handleLogin}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              autoComplete="off"
              rules={[{ required: true, message: "Please enter your Email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="example@example.com"
              />
            </Form.Item>
            <Form.Item
              name="password"
              autoComplete="off"
              rules={[
                { required: true, message: "Please enter your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            {/* <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Button
              icon={<LoginOutlined />}
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              Login
            </Button>
          </Form>

          <p className={styles.aboutText}>
            <InfoCircleFilled style={{ marginRight: 5 }} />
            Vedic Sustainable City Index Platform typically involves the
            development of a set of indicators or criteria to evaluate different
            aspects of Ayodhya's sustainability, which may include
            environmental, social, economic, and governance factors. These
            indicators could cover areas such as air quality, green spaces,
            energy efficiency, waste management, social inclusivity, economic
            prosperity, and more.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default LoginHome;
