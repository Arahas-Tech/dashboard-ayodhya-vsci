import { Card } from "antd";
import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
CanvasJS.addColorSet("blueShades", [
  "#e5243b", // No Poverty
  "#dda63a", // Zero Hunger
  "#4c9f38", // Good Health and Well-being
  "#c5192d", // Quality Education
  "#ff3a21", // Gender Equality
  "#26bde2", // Clean Water and Sanitation
  "#fcc30b", // Affordable and Clean Energy
  "#a21942", // Decent Work and Economic Growth
  "#fd6925", // Industry, Innovation, and Infrastructure
  "#dd1367", // Reduced Inequality
  "#fd9d24", // Sustainable Cities and Communities
  "#c4d600", // Responsible Consumption and Production
  "#0a97b0", // Climate Action
  "#56c02b", // Life Below Water
  "#00689d", // Life on Land
  "#19486a", // Peace, Justice, and Strong Institutions
  "#9e479b", // Partnerships for the Goals
]);

function DoughnutChart({ dataSeries, chartTitle, exportable }) {
  // Configuration for the bar chart
  const options = {
    exportEnabled: exportable ?? false,
    animationEnabled: true,
    height: 280,
    theme: "light2",
    colorSet: "blueShades",
    toolTip: {
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
    },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "bottom",
      reversed: true,
      cursor: "pointer",
      itemclick: toggleDataSeries,
      fontFamily: "Poppins",
    },
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: {y} - #percent %",
        dataPoints: dataSeries,
      },
    ],
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

export default DoughnutChart;
