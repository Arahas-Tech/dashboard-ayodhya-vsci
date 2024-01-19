import { Card, Col, Flex, Row } from "antd";
import PieChart from "components/charts/PieChart";
import SingleColumnChart from "components/charts/SingleColumnChart";
import React from "react";

const GreenAndOpenSpaces = () => {
  const landuseData = [
    {
      label: "Residential",
      y: 1466,
    },
    {
      label: "Commercial",
      y: 124.5,
    },
    {
      label: "Industrial",
      y: 143,
    },
    {
      label: "Public & Semi-Public",
      y: 470.3,
    },
    {
      label: "Park, Open Space & Green Belt",
      y: 163.3,
    },
    {
      label: "Traffic & Transportation",
      y: 581,
    },
    {
      label: "Other Mix (Offices etc.)",
      y: 144.8,
    },
  ];

  const landuseDataPercentage = [
    {
      label: "Residential",
      y: 47.0,
    },
    {
      label: "Commercial",
      y: 4.0,
    },
    {
      label: "Industrial",
      y: 5.0,
    },
    {
      label: "Public & Semi-Public",
      y: 15.0,
    },
    {
      label: "Park, Open Space & Green Belt",
      y: 5.0,
    },
    {
      label: "Traffic & Transportation",
      y: 19.0,
    },
    {
      label: "Other Mix (Offices etc.)",
      y: 5.0,
    },
  ];

  const proposedLandUseData = [
    {
      label: "Residential",
      y: 4668.6,
    },
    {
      label: "Commercial",
      y: 334.7,
    },
    {
      label: "Industrial",
      y: 729.9,
    },
    {
      label: "Public & Semi-Public",
      y: 952.6,
    },
    {
      label: "Park, Open Space & Green Belt",
      y: 1331.6,
    },
    {
      label: "Traffic & Transportation",
      y: 1811.5,
    },
    {
      label: "Other Mix (Offices etc.)",
      y: 123.6,
    },
  ];

  const proposedLandUseDataSeriesPercentage = [
    {
      label: "Residential",
      y: 46.9,
    },
    {
      label: "Commercial",
      y: 3.4,
    },
    {
      label: "Industrial",
      y: 7.3,
    },
    {
      label: "Public & Semi-Public",
      y: 9.6,
    },
    {
      label: "Park, Open Space & Green Belt",
      y: 13.4,
    },
    {
      label: "Traffic & Transportation",
      y: 18.2,
    },
    {
      label: "Other Mix (Offices etc.)",
      y: 1.2,
    },
  ];

  const landUseDataSeries = [
    {
      type: "column",
      dataPoints: landuseData,
    },
  ];

  const proposedLandUseDataSeries = [
    {
      type: "column",
      dataPoints: proposedLandUseData,
    },
  ];

  return (
    <>
      <Row align="middle" justify="space-between" style={{ marginBottom: 5 }}>
        <Col span={12}>
          <Flex align="center" gap={5}>
            <img
              src={require("assets/sdgs/E-WEB-Goal-11.png")}
              alt="11"
              className="goals-image"
            />
            <img
              src={require("assets/sdgs/E-WEB-Goal-13.png")}
              alt="13"
              className="goals-image"
            />
            <img
              src={require("assets/sdgs/E-WEB-Goal-15.png")}
              alt="15"
              className="goals-image"
            />
          </Flex>
        </Col>
      </Row>
      <Flex vertical gap={16} align="middle">
        <Card title="Present Land Use">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24} lg={12}>
              <SingleColumnChart
                chartTitle="As of February 2023*"
                dataSeries={landUseDataSeries}
                xAxisTitle=""
                yAxisTitle="in hectares"
                xAxisLabel={false}
                yAxisLabel={false}
              />
            </Col>

            <Col xs={24} md={24} lg={12}>
              <PieChart
                chartTitle="As of February 2023* (%)"
                dataSeries={landuseDataPercentage.map(({ label, y }) => ({
                  label,
                  y,
                }))}
              />
            </Col>
          </Row>
        </Card>

        <Card title="Projected Land Use (2031)">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={24} lg={12}>
              <SingleColumnChart
                chartTitle="Projected Land Use (2031)"
                dataSeries={proposedLandUseDataSeries}
                xAxisTitle=""
                yAxisTitle="in hectares"
                xAxisLabel={false}
                yAxisLabel={false}
              />
            </Col>

            <Col xs={24} md={24} lg={12}>
              <PieChart
                chartTitle="Projected Land Use (2031) (%)"
                dataSeries={proposedLandUseDataSeriesPercentage.map(
                  ({ label, y }) => ({
                    label,
                    y,
                  })
                )}
                xAxisTitle=""
                yAxisTitle="in hectares"
                xAxisLabel={false}
                yAxisLabel={false}
              />
            </Col>
          </Row>
        </Card>
      </Flex>
    </>
  );
};

export default GreenAndOpenSpaces;
