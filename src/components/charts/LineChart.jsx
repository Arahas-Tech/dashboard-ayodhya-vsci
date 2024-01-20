import { Card } from "antd";
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
CanvasJS.addColorSet("blueShades", [
  "#DDA63A", // Zero Hunger
  "#4C9F38", // Good Health and Well-being
  "#ff3a21", // Gender Equality
  "#26BDE2", // Clean Water
  "#fcc30b", // Affordable and Clean Energy
  "#a21942", // Decent Work and Economic Growth
  "#fd6925", // Industry, Innovation, and Infrastructure
  "#fd9d24", // Sustainable Cities and Communities
  "#DD1367", // Reduced Inequalities
  "#BF8B2E", // Responsible Consumption and Production
  "#3F7E44", // Climate Action
  "#0A97D9", // Life Below Water
  "#56c02b", // Life on Land
  "#00689D", // Peace, Justice, and Strong Institutions
  "#19486A", // Partnerships for the Goals
]);

function LineChart({ dataSeries, xAxisTitle, yAxisTitle, chartTitle }) {
  // Configuration for the bar chart
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    height: 280,
    theme: "light2",
    colorSet: "blueShades",
    axisX: {
      title: xAxisTitle === " " ? null : xAxisTitle,
      titleFontFamily: "Inter",
      labelFontFamily: "Inter",
      titleFontSize: 12,
      labelMaxWidth: 70,
    },
    axisY: {
      title: yAxisTitle === " " ? null : yAxisTitle,
      titleFontFamily: "Inter",
      labelFontFamily: "Inter",
      titleFontSize: 12,
      stripLines: [
        {
          startValue: 50,
          endValue: 100,
          color: "#d8d8d8",
          label: "Base Line",
          labelFontColor: "#a8a8a8",
        },
      ],
    },
    toolTip: {
      titleFontFamily: "Inter",
      labelFontFamily: "Inter",
    },
    legend: {
      verticalAlign: "top",
      horizontalAlign: "left",
      reversed: true,
      cursor: "pointer",
      itemclick: toggleDataSeries,
      fontFamily: "Inter",
    },
    data: dataSeries,
  };

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }

  return (
    <Card hoverable title={chartTitle ?? false}>
      <CanvasJSChart options={options} style={{ height: "max-content" }} />
    </Card>
  );
}

export default LineChart;
