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
      <Flex align="center" gap={5} style={{ marginBottom: 5 }}>
        <img
          src={require("assets/sdgs/E-WEB-Goal-11.png")}
          alt="11.6"
          className="goals-image"
        />
        Reduce the environmental impacts of city
      </Flex>

      <Flex vertical gap={16} align="middle">
        <Card title="Present Land Use">
          <Row gutter={[16, 16]}>
            <Col md={24} lg={12}>
              <SingleColumnChart
                chartTitle="Current Land Use (%)"
                dataSeries={landUseDataSeries}
                xAxisTitle=""
                yAxisTitle="in ha"
                xAxisLabel={false}
                yAxisLabel={false}
              />
            </Col>

            <Col md={24} lg={12}>
              <PieChart
                chartTitle="Current Land Use"
                dataSeries={landuseDataPercentage.map(({ label, y }) => ({
                  label,
                  y,
                }))}
                xAxisTitle=""
                yAxisTitle="in ha"
                xAxisLabel={false}
                yAxisLabel={false}
              />
            </Col>
          </Row>
        </Card>

        <Card title="Proposed Land Use">
          <Row gutter={[16, 16]}>
            <Col md={24} lg={12}>
              <SingleColumnChart
                chartTitle="Proposed Land Use"
                dataSeries={proposedLandUseDataSeries}
                xAxisTitle=""
                yAxisTitle="in ha"
                xAxisLabel={false}
                yAxisLabel={false}
              />
            </Col>

            <Col md={24} lg={12}>
              <PieChart
                chartTitle="Proposed Land Use (%)"
                dataSeries={proposedLandUseDataSeriesPercentage.map(
                  ({ label, y }) => ({
                    label,
                    y,
                  })
                )}
                xAxisTitle=""
                yAxisTitle="in ha"
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
