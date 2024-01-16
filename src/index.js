import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import Hindi from "antd/locale/hi_IN";
import "dayjs/locale/zh-cn";
import App from "App";
import "leaflet/dist/leaflet.css";

dayjs.locale("hi");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={Hindi}
      theme={{
        token: {
          colorPrimary: "#fd9d24",
          colorInfo: "#fd9d24",
          wireframe: false,
          borderRadius: 5,
          darkItemBg: "#fd9d24",
          colorTextBase: "#303030",
          colorBgBase: "#fcfefe",
          colorBgContainer: "#fcfefe",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
