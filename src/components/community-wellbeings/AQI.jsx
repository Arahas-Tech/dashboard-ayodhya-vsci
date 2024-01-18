import { Card, Flex, Progress, Row, Segmented } from "antd";

import styles from "./styles.module.css";
import React, { useState } from "react";

import { Typography } from "antd";
import {
  AQIPastDataStation1,
  AQIPastDataStation2,
} from "constants/aqiPastData";
import LineChart from "components/charts/LineChart";

import GaugeComponent from "react-gauge-component";
import ValueCard from "./aqi/ValueCard";

const { Text } = Typography;

function AQI({ AQIs, aqiData }) {
  const [value, setValue] = useState("Current/Live");

  const [ellipsis] = useState(true);
  const aqiColors = [
    { range: [0, 50], label: "Good", color: "rgb(0, 176, 80, 0.125)" },
    {
      range: [51, 100],
      label: "Satisfactory",
      color: "rgb(146, 208, 80, 0.125)",
    },
    {
      range: [101, 200],
      label: "Moderate",
      color: "rgb(255, 255, 0, 0.125)",
    },
    { range: [201, 300], label: "Poor", color: "rgb(255, 153, 0, 0.125)" },
    {
      range: [301, 400],
      label: "Very Poor",
      color: "rgb(255, 0, 0, 0.125) ",
    },
    { range: [401, 700], label: "Severe", color: "rgb(192, 0, 0, 0.35)" },
  ];

  const aqiParamsColorsFullOpacity = [
    { range: [0, 50], label: "Good", color: "rgb(0, 176, 80)" },
    {
      range: [51, 100],
      label: "Satisfactory",
      color: "rgb(146, 208, 80)",
    },
    {
      range: [101, 200],
      label: "Moderate",
      color: "rgb(255, 255, 0)",
    },
    { range: [201, 300], label: "Poor", color: "rgb(255, 153, 0)" },
    {
      range: [301, 400],
      label: "Very Poor",
      color: "rgb(255, 0, 0)",
    },
    { range: [401, 700], label: "Severe", color: "rgb(192, 0, 0)" },
  ];

  const getColorForAqi = (aqi) => {
    const colorRange = aqiColors.find(
      (range) => aqi >= range.range[0] && aqi <= range.range[1]
    );
    return colorRange ? colorRange.color : "#ffffff";
  };

  const getColorForAqiParams = (aqi) => {
    const colorRange = aqiParamsColorsFullOpacity.find(
      (range) => aqi >= range.range[0] && aqi <= range.range[1]
    );
    return colorRange ? colorRange.color : "#ffffff";
  };

  const aqiDataSeriesStation1 = [
    {
      type: "spline",
      dataPoints: AQIPastDataStation1,
    },
  ];

  const aqiDataSeriesStation2 = [
    {
      type: "spline",
      dataPoints: AQIPastDataStation2,
    },
  ];

  return (
    <>
      <Card className="tab-cards">
        <Segmented
          options={["Current/Live", "Yesterday", "Weekly", "Past Data"]}
          block
          value={value}
          onChange={setValue}
        />

        {value === "Current/Live" &&
          aqiData?.map((data) => {
            const AQI = AQIs && AQIs[data.id];
            return (
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <Flex align="center" gap={8}>
                    <img
                      width="30"
                      height="30"
                      src={require("assets/svg/aqi.svg").default}
                      alt="AQI"
                    />
                    <Text
                      style={ellipsis ? { width: 160 } : undefined}
                      ellipsis={ellipsis ? { tooltip: data.name } : false}
                    >
                      <b>{data.name}</b>
                      <p className={styles.dateTime}>
                        {new Date(
                          data.last_data_received_time * 1000
                        ).toLocaleString("en-IN")}
                      </p>
                    </Text>
                  </Flex>

                  <Flex align="center" gap={8}>
                    <b>AQI</b>

                    <Progress
                      size="small"
                      type="dashboard"
                      percent={(AQI / 900) * 100}
                      format={() => (
                        <div style={{ color: getColorForAqiParams(AQI) }}>
                          <b>{AQI}</b>
                        </div>
                      )}
                      strokeColor={getColorForAqiParams(AQI)}
                      strokeWidth={10}
                    />
                  </Flex>
                </div>

                <div
                  className={styles.aqiParams}
                  style={{
                    backgroundColor: getColorForAqi(AQI),
                  }}
                >
                  {data.parameters.map(
                    (parameter) =>
                      !(
                        parameter.key === "aqi" ||
                        parameter.key === "data_availability"
                      ) && (
                        <ValueCard
                          parameter={parameter}
                          borderColor={getColorForAqiParams(parameter.value)}
                        />
                      )
                  )}
                </div>
              </div>
            );
          })}

        {value === "Current/Live" && (
          <Card title="Past AQI Data">
            <Flex vertical gap={16}>
              <LineChart
                dataSeries={aqiDataSeriesStation1}
                chartTitle="Station 1 (Digambar Akhada)"
              />

              <LineChart
                dataSeries={aqiDataSeriesStation2}
                chartTitle="Station 2 (DR. RML Avadh University)"
              />
            </Flex>
          </Card>
        )}
      </Card>
    </>
  );
}

export default AQI;
