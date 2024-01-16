import { Card, Progress } from "antd";

import styles from "./styles.module.css";
import React, { useState } from "react";

import { Typography } from "antd";
import { AQIPastData } from "constants/aqiPastData";
import LineChart from "components/charts/LineChart";

const { Text } = Typography;

function AQI({ AQIs, aqiData }) {
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
      color: "rgb(255, 0, 0) ",
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

  const aqiDataSeries = [
    {
      type: "spline",
      dataPoints: AQIPastData,
    },
    {
      type: "spline",
      dataPoints: [{ y: 100 }],
    },
  ];

  return (
    <>
      <Card className="tab-cards">
        {aqiData?.map((data) => {
          const AQI = AQIs && AQIs[data.id];
          return (
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.leftSection}>
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
                </div>

                <div className={styles.rightSection}>
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
                </div>
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
                      <div
                        key={parameter.key}
                        className={styles.aqiParamCard}
                        style={
                          ["so2", "pm2.5", "pm10", "no2"].includes(
                            parameter.key
                          )
                            ? {
                                borderBottom: `2px solid ${getColorForAqiParams(
                                  parameter.value
                                )}`,
                              }
                            : {}
                        }
                      >
                        <div className={styles.paramsValueUnit}>
                          <div className={styles.paramsValue}>
                            {parseFloat(parameter.value).toFixed(2)}
                          </div>
                          <div className={styles.paramsTitle}>
                            {parameter.name} ({parameter.unit})
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          );
        })}

        <div>
          <LineChart dataSeries={aqiDataSeries} />
        </div>
      </Card>
    </>
  );
}

export default AQI;
