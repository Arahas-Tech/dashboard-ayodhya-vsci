import React from "react";

import NotFoundImage from "assets/images/404.svg";
import styles from "./styles.module.css";

import { Button } from "antd";
import { BackwardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  return (
    <>
      <div className={styles.centerImageNF}>
        <img src={NotFoundImage} alt="Under-Construction" />
        <Button
          type="primary"
          size="large"
          icon={<BackwardOutlined />}
          onClick={() => navigation("/")}
        >
          Go Back
        </Button>
      </div>
    </>
  );
}

export default NotFound;
