import React from "react";

import CountUp from "react-countup";

import { ArrowUpOutlined, InfoCircleFilled } from "@ant-design/icons";
import { Card, Col, Row, Space, Statistic, Tabs, Tooltip } from "antd";

// import styles from "./styles.module.css";
import GroupedColumnChart from "components/charts/GroupedColumnChart";
import FormatChartData from "utils/FormatChartData";
import SingleColumnChart from "components/charts/SingleColumnChart";
import DoughnutChart from "components/charts/DoughnutChart";
import BarChart from "components/charts/BarChart";
import WaterBodies from "components/maps/water-conservation/WaterBodies";

const { TabPane } = Tabs;

const formatter = (value) => <CountUp end={value} separator="," />;

const WaterConservation = () => {
  const chartDataWS = [
    {
      category: "Tube Well",
      value: 31.82,
      type: "Water Tapping Points",
    },
    {
      category: "Tube Well",
      value: 77,
      type: "Quantity of water tapped in MLD",
    },
    {
      category: "Handpumps",
      value: 8.01,
      type: "Water Tapping Points",
    },
    {
      category: "Handpumps",
      location: "Ayodhya",
      value: 3562,
      type: "Quantity of water tapped in MLD",
    },
    {
      category: "Saryu River",
      value: 0,
      type: "Water Tapping Points",
    },
    {
      category: "Saryu River",
      value: 0,
      type: "Quantity of water tapped in MLD",
    },
  ];

  const chartDataCTWS = [
    { label: "Residential/Households", y: 27.33 },
    { label: "Slums", y: 0.87 },
    { label: "Industrial/Commercial Establishments", y: 0 },
    { label: "Institutional Establishments", y: 0 },
  ];

  const tapConnectionsData = [
    { label: "Residential/Households", y: 49992 },
    { label: "Industrial/Commercial Establishments", y: 0 },
    { label: "Institutional Establishments", y: 0 },
    { label: "Slums", y: 1595 },
  ];

  const waterSuppliedData = [
    { label: "Residential/Households", y: 27.33 },
    { label: "Industrial/Commercial Establishments", y: 0 },
    { label: "Institutional Establishments", y: 0 },
    { label: "Slums", y: 0.87 },
  ];

  const waterData = [
    {
      type: "bar",
      dataPoints: [
        { label: "Piped", y: 27.33 },
        { label: "Tankers", y: 0 },
        { label: "Tubewell & Borewell", y: 4.49 },
        { label: "Treated", y: 0 },
        { label: "Total ", y: 31.82 },
        { label: "Avg. Per Capita (in LPCD)", y: 134.985 },
      ],
    },
  ];

  const establishmentData = [
    {
      type: "bar",
      dataPoints: [
        { label: "Residential/Households", y: 78.04 },
        { label: "Commercial", y: 1.32 },
        { label: "Industries", y: 0.5 },
        { label: "Institutional", y: 3.48 },
        { label: "Slums", y: 2.14 },
        { label: "Total", y: 83.34 },
      ],
    },
  ];

  const sewerConnectionData = [
    { y: 66.37, label: "Sewage Generated (MLD)" },
    { y: 42, label: "Sewage Treated (MLD)" },
  ];

  const septageCoverageData = [
    { label: "Sewage Generated", y: 40920 },
    { label: "Sludge Treated", y: 58 },
    { label: "Grey Water Recycled", y: 0 },
  ];

  const dataSeriesWS = FormatChartData(chartDataWS);
  const dataSeriesCTWS = [
    {
      type: "column",
      showInLegend: false,
      dataPoints: chartDataCTWS,
    },
  ];

  const septageCoverageDataSeries = [
    {
      type: "column",
      showInLegend: false,
      dataPoints: septageCoverageData,
    },
  ];

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col md={24} lg={12}>
          <Card>
            <WaterBodies />
          </Card>
        </Col>

        <Col md={24} lg={12}>
          <Tabs defaultActiveKey="Water Connections" type="card">
            <TabPane tab="Water Connections" key="Water Connections">
              <Card className="tab-cards">
                <Row gutter={[16, 16]}>
                  <Col md={24} lg={6}>
                    <Card bordered={false} style={{ display: "flex" }}>
                      <Statistic
                        title="Total Households"
                        value={49992}
                        valueStyle={{
                          color: "#3f8600",
                        }}
                      />
                    </Card>
                  </Col>

                  <Col md={24} lg={6}>
                    <Card bordered={false} style={{ display: "flex" }}>
                      <Statistic
                        title="Total Slums"
                        value={1595}
                        valueStyle={{
                          color: "#3f8600",
                        }}
                      />
                    </Card>
                  </Col>

                  <Col md={24} lg={6}>
                    <Card bordered={false}>
                      <Statistic
                        title="Institutional Establishments"
                        value="#"
                        valueStyle={{
                          color: "#3f8600",
                        }}
                      />
                    </Card>
                  </Col>

                  <Col md={24} lg={6}>
                    <Card bordered={false}>
                      <Statistic
                        title="Commercial Establishments"
                        value="#"
                        valueStyle={{
                          color: "#3f8600",
                        }}
                      />
                    </Card>
                  </Col>
                </Row>

                <Row justify="space-around" align="middle" gutter={[16, 16]}>
                  <Col span={24}>
                    <DoughnutChart
                      dataSeries={tapConnectionsData}
                      chartTitle="Tap Connections Distribution"
                      exportable={false}
                    />
                  </Col>

                  <Col span={24}>
                    <DoughnutChart
                      dataSeries={waterSuppliedData}
                      chartTitle="Water Supplied Distribution (MLD)"
                      exportable={false}
                    />
                  </Col>
                </Row>
              </Card>
            </TabPane>

            <TabPane tab="Water Supply" key="Water Supply">
              <Card className="tab-cards">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <GroupedColumnChart
                      chartTitle="Water Supply"
                      dataSeries={dataSeriesWS}
                      xAxisTitle=""
                      yAxisTitle="Values"
                    />
                  </Col>
                  <Col span={24}>
                    <SingleColumnChart
                      chartTitle="Connection Type Water Supply"
                      dataSeries={dataSeriesCTWS}
                      xAxisTitle=""
                      yAxisTitle="Water Supplied (MLD)"
                      xAxisLabel={false}
                      yAxisLabel={false}
                    />
                  </Col>
                </Row>
              </Card>
            </TabPane>

            <TabPane
              tab="Present to Future Demand"
              key="Present to Future Demand"
            >
              <Card className="tab-cards">
                <Row justify="space-around" align="middle" gutter={[16, 16]}>
                  <Col span={24}>
                    <BarChart
                      chartTitle="Present Water Supply (in MLD)"
                      dataSeries={waterData}
                      xAxisTitle=""
                      yAxisTitle="Values"
                    />
                  </Col>

                  <Col span={24}>
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ display: "flex" }}
                    >
                      <Card bordered={false}>
                        <Statistic
                          title="Current Water Supply"
                          value={31.8}
                          precision={2}
                          valueStyle={{
                            color: "#0e0e0e",
                          }}
                          suffix="MLD"
                        />
                      </Card>
                      <Card bordered={false}>
                        <Statistic
                          title="Projected Requirement (2025)"
                          value={83.34}
                          precision={2}
                          valueStyle={{
                            color: "#0e0e0e",
                          }}
                          suffix="MLD"
                        />
                      </Card>
                      <Card bordered={false}>
                        <Statistic
                          title="Required Increase"
                          value={(83.34 / 31.8) * 100}
                          precision={2}
                          formatter={formatter}
                          prefix={<ArrowUpOutlined />}
                          valueStyle={{
                            color: "#3f8600",
                          }}
                          suffix={
                            <Tooltip placement="top" title="Check Adequacy">
                              <InfoCircleFilled />
                            </Tooltip>
                          }
                        />
                      </Card>
                    </Space>
                  </Col>

                  <Col span={24}>
                    <BarChart
                      chartTitle="Estimated Future Water Demand (in MLD)"
                      dataSeries={establishmentData}
                      xAxisTitle=""
                      yAxisTitle="Values"
                    />
                  </Col>
                </Row>
              </Card>
            </TabPane>

            <TabPane tab="Sewer Coverage" key="Sewer Coverage">
              <Card className="tab-cards">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Card title="Household Sewer Connections">
                      <Space
                        direction="vertical"
                        size="middle"
                        style={{ display: "flex" }}
                      >
                        <Row gutter={[8, 8]}>
                          <Col md={12} lg={12}>
                            <Card>
                              <Statistic
                                title="Household Connected"
                                value={30569}
                              />
                            </Card>
                          </Col>

                          <Col md={12} lg={12}>
                            <Card>
                              <Statistic
                                title="Household Not connected"
                                value={93544}
                              />
                            </Card>
                          </Col>
                        </Row>

                        <DoughnutChart dataSeries={sewerConnectionData} />
                      </Space>
                    </Card>
                  </Col>

                  <Col span={24}>
                    <Card title="Household Septage Coverage">
                      <Space
                        direction="vertical"
                        size="middle"
                        style={{ display: "flex" }}
                      >
                        <Row gutter={[16, 16]}>
                          <Col span={24}>
                            <Card>
                              <Statistic
                                title="Household Covered"
                                value={7500}
                              />
                            </Card>
                          </Col>
                        </Row>

                        <SingleColumnChart
                          chartTitle="Septage Coverage"
                          dataSeries={septageCoverageDataSeries}
                          xAxisTitle=""
                          yAxisTitle="in KLD"
                          xAxisLabel={false}
                          yAxisLabel={false}
                        />
                      </Space>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default WaterConservation;
