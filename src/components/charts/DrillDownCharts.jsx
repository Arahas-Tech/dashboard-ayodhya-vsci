// src/components/RainfallChart.js
import React, { useEffect, useState } from "react";
import { RainfallData, YearWiseRainfallData } from "constants/RainfallData";

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

const RainfallChart = () => {
  const [chartData, setChartData] = useState(getYearlyData());

  let options = {};

  function getYearlyData() {
    return YearWiseRainfallData.map((data) => ({
      label: data.x,
      y: parseFloat(data.y),
      drilldown: getMonthlyData(data.x),
    }));
  }

  function getMonthlyData(year) {
    const monthlyData = [];

    if (RainfallData && RainfallData[0]) {
      const yearData = RainfallData[0][year];

      if (yearData) {
        Object.entries(yearData.monthWise[0]).forEach(([key, value]) => {
          monthlyData.push({
            label: key,
            y: parseFloat(value).toFixed(1),
          });
        });
      }
    }

    return monthlyData;
  }

  useEffect(() => {
    setChartData(getYearlyData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlePointClick(e) {
    if (e.dataPoint.drilldown) {
      const dataPoint = e.dataPoint;

      const drilldownData = dataPoint.drilldown.map((data) => ({
        ...data,
        y: parseFloat(data.y),
      }));

      setChartData(drilldownData);
    }
  }

  options = {
    exportEnabled: true,
    animationEnabled: true,
    height: 300,
    axisX: {
      titleFontFamily: "Inter",
      labelFontFamily: "Inter",
      titleFontSize: 12,
    },
    axisY: {
      titleFontFamily: "Inter",
      labelFontFamily: "Inter",
      titleFontSize: 12,
      title: "Rainfall (in mm)",
      stripLines: [
        {
          value: 1001.7,
          color: "#fd9d24",
          label: "Normal",
          labelFontColor: "#a8a8a8",
        },
      ],
    },
    toolTip: {
      shared: true,
      titleFontFamily: "Inter",
      labelFontFamily: "Inter",
    },
    legend: {
      horizontalAlign: "bottom",
      verticalAlign: "bottom",
      cursor: "pointer",
      fontFamily: "Inter",
    },

    data: [
      {
        type: "spline",
        name: "Rainfall",
        showInLegend: true,
        dataPoints: chartData,
        click: handlePointClick,
      },
    ],
    drilldown: {
      enabled: true,
    },
  };

  return <CanvasJSChart options={options} />;
};

export default RainfallChart;
