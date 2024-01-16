import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import axios from "axios";

import AQI from "components/community-wellbeings/AQI";
import AQIMap from "components/maps/community-wellbeings/AQIMap";
import { Col, Flex, Row, Spin, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";

const CommunityWellBeings = () => {
  const [aqiIDs, setAQIIDs] = useState();
  const [aqiData, setAQIData] = useState();
  const [AQIs, setAQIs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAQIData = async () => {
      try {
        const response = await axios.get(
          "https://app.aurassure.com/-/api/iot-platform/v1.1.0/clients/10565/applications/16/things/list",
          {
            headers: {
              "Access-Id": "WYDAeaT0kA7kKVyg",
              "Access-Key":
                "H0RkamVKJ2jiGda9tx2i20kykwCGkRhn2P3bXwDgxP8dAKxLp1CM65DYKg0oYCV2",
            },
          }
        );

        if (response.status === 200) {
          setLoading(false);
          setAQIData(response.data.things);
          let thingsID = [];
          response.data?.things?.map((thing) =>
            thingsID.push({
              thingID: thing.id,
              from_time: thing.last_data_received_time - 3599,
              upto_time: thing.last_data_received_time,
            })
          );

          setAQIIDs(thingsID);
        }
      } catch (error) {}
    };

    const intervalCall = setInterval(async () => {
      await getAQIData();
    }, 10000);

    return () => {
      // clean up
      clearInterval(intervalCall);
    };
  }, []);

  const getAQI = async (locationID, from_time, upto_time) => {
    try {
      const response = await axios.post(
        "https://app.aurassure.com/-/api/iot-platform/v1.1.0/clients/10565/applications/16/things/data",
        {
          data_type: "aggregate",
          aggregation_period: 3600,
          parameters: ["aqi"],
          parameter_attributes: ["value", "avg", "max", "min"],
          things: [locationID],
          from_time: from_time,
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

      setAQIs((prevAQIs) => ({
        ...prevAQIs,
        [locationID]: response?.data?.data[0]?.parameter_values?.aqi?.value,
      }));

      return 0;
    } catch (error) {
      return 0;
    }
  };

  useEffect(() => {
    aqiIDs?.forEach((aqiID) => {
      getAQI(aqiID.thingID, aqiID.from_time, aqiID.upto_time);
    });
  }, [aqiIDs]);

  return (
    <>
      <Tabs defaultActiveKey="AQI" type="card">
        <TabPane tab="AQI" key="AQI"></TabPane>
      </Tabs>

      {loading ? (
        <div className={styles.loader}>
          <Spin />
          Loading Data...
        </div>
      ) : (
        <Flex vertical gap={16}>
          <Row gutter={[8, 8]}>
            <Col lg={12}>
              <AQIMap aqiData={aqiData} AQIs={AQIs} />
            </Col>
            <Col lg={12}>
              <AQI aqiData={aqiData} AQIs={AQIs} />
            </Col>
          </Row>
        </Flex>
      )}
    </>
  );
};

export default CommunityWellBeings;
