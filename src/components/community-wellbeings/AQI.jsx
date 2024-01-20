import { Card, Col, Flex, Progress, Row, Segmented, Select } from "antd";

import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";

import { Typography } from "antd";
import {
  AQIPastDataStation1,
  AQIPastDataStation2,
} from "constants/aqiPastData";
import LineChart from "components/charts/LineChart";

import GaugeComponent from "react-gauge-component";
import ValueCard from "./aqi/ValueCard";
import axios from "axios";

const { Text } = Typography;

function AQI({ AQIs, aqiData, aqiIDs }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const [aqiYesterdayData, setAQIYesterdayData] = useState();
  // const [yesterdayAQIs, setYesterdayAQIs] = useState();

  const [value, setValue] = useState("Current/Live");

  const aqiTooltipValues = [
    {
      CO2: "High concentrations of CO2 can induce headache, nausea, dizziness, and a tingling (needle-like) feeling. Higher levels may lead to difficulty in breathing (dyspnea), sweating, exhaustion, vomiting, and an increase in heart rate (tachycardia). Loss of consciousness occurs at jarringly high levels of CO2.",
      NO2: "Breathing air with a high concentration of NO2 can irritate airways in the human respiratory system. Such exposures over short periods can aggravate respiratory diseases, particularly asthma, leading to respiratory symptoms (such as coughing, wheezing or difficulty breathing), hospital admissions and visits to emergency rooms.",
      SO2: "SO2 can affect both health and the environment. Short-term exposures to SO2 can harm the human respiratory system and make breathing difficult. People with asthma, particularly children, are sensitive to these effects of SO2.",
      "PM2.5":
        "Inhalable particles, with diameters that are generally 10 micrometers and smaller. Coarse particles can irritate your eyes, nose, and throat.",
      PM10: "Fine inhalable particles, with diameters that are generally 2.5 micrometers and smaller. Fine (smaller) particles, are more dangerous because they can get into the deep parts of your lungs — or even into your blood",
      TVOC: "Total volatile organic compounds (TVOC) is a grouping of a wide range of organic chemical compounds to simplify reporting when these are present in ambient air or emissions. General effects of exposure to VOCs include: irritation to the eyes, nose and throat; headaches; loss of coordination; nausea; and damage to the liver, kidney and central nervous system.",
    },
  ];

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

  const handleChange = (value) => {
    setSelectedLocation(value);
  };

  const getAQI = async (locationID, upto_time) => {
    try {
      const response = await axios.post(
        "https://app.aurassure.com/-/api/iot-platform/v1.1.0/clients/10565/applications/16/things/data",
        {
          data_type: "aggregate",
          aggregation_period: 3600,
          parameters: ["aqi"],
          parameter_attributes: ["value", "avg", "max", "min"],
          things: [locationID],
          from_time: upto_time - 86400,
          upto_time: upto_time,
        },
        {
          headers: {
            "Access-Id": "WYDAeaT0kA7kKVyg",
            "Access-Key":
              "H0RkamVKJ2jiGda9tx2i20kykwCGkRhn2P3bXwDgxP8dAKxLp1CM65DYKg0oYCV2",
          },
        }
      );
      let modifiedData = [];
      response?.data?.data?.map((data) =>
        modifiedData.push(data.parameter_values?.aqi?.value)
      );

      // var total = 0;
      // var count = 0;
      // modifiedData.each(function (index, value) {
      //   total += value;
      //   count++;
      // });

      setAQIYesterdayData({
        max: Math.max(...modifiedData),
        min: Math.min(...modifiedData),
      });
    } catch (error) {
      return 0;
    }
  };

  useEffect(() => {
    try {
      if (selectedLocation !== "Select Location") {
        getAQI(
          selectedLocation,
          aqiIDs?.find((item) => {
            return selectedLocation === item.name ? item.upto_time : [];
          })?.upto_time
        );
      }
    } catch (error) {}
  }, [selectedLocation, aqiIDs]);

  const aqiLocationOptions = aqiIDs?.map((item) => ({
    label: item.name,
    value: item.thingID,
  }));

  return (
    <>
      <Card className="tab-cards" style={{ height: "73vh" }}>
        <Segmented
          options={["Current/Live", "Yesterday", "Past Data"]}
          block
          value={value}
          onChange={setValue}
        />

        {value === "Current/Live" &&
          aqiData &&
          aqiData?.map((data) => {
            const AQI = AQIs && AQIs[data.id];
            return (
              <>
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
                    {data &&
                      data?.parameters?.map(
                        (parameter) =>
                          !(
                            parameter?.key === "aqi" ||
                            parameter?.key === "data_availability"
                          ) && (
                            <ValueCard
                              key={parameter?.key}
                              parameter={parameter}
                              aqiTooltipValues={aqiTooltipValues}
                              borderColor={getColorForAqiParams(
                                parameter?.value
                              )}
                            />
                          )
                      )}
                  </div>
                </div>
              </>
            );
          })}

        {value === "Yesterday" && (
          <>
            <Select
              defaultValue="Select Location"
              onChange={handleChange}
              options={aqiLocationOptions}
            />

            <Row align="middle" gutter={[8, 8]}>
              <Col span={6}>
                <b>Min:</b> {aqiYesterdayData?.min}
              </Col>
              <Col span={12}>
                <GaugeComponent
                  className={styles.aqiBar}
                  type="semicircle"
                  arc={{
                    colorArray: ["#00b050", "#FF2121"],
                    padding: 0.02,
                    subArcs: [
                      { limit: 50 },
                      { limit: 100 },
                      { limit: 200 },
                      { limit: 300 },
                      { limit: 400 },
                      { limit: 500 },
                      { limit: 900 },
                    ],
                  }}
                  pointer={{ type: "blob", animationDelay: 0 }}
                  minValue={0}
                  maxValue={900}
                  value={aqiYesterdayData?.min ?? 0}
                />
              </Col>
              <Col
                span={6}
                style={{ alignItems: "flex-end", textAlign: "right" }}
              >
                <b>Max:</b> {aqiYesterdayData?.max}
              </Col>
            </Row>
          </>
        )}

        {value === "Past Data" && (
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
