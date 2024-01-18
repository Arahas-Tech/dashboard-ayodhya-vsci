// src/components/RainfallChart.js
import React, { useEffect, useState } from "react";
import { RainfallData, YearWiseRainfallData } from "constants/RainfallData";

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

  //   function getDailyData(month, dailyData) {
  //     const dailyRainfallData = [];

  //     const groupedData = RainfallData[0]?.monthWise.reduce((acc, item) => {
  //       console.log(acc, item);
  //       Object.keys(item).forEach((key) => {
  //         if (key !== "Day") {
  //           if (!acc[key]) {
  //             acc[key] = [];
  //           }
  //           acc[key].push({ Day: item.Day, value: item[key] });
  //         }
  //       });
  //       return acc;
  //     }, {});

  //     dailyRainfallData.push(groupedData);

  //     return dailyRainfallData;
  //   }

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
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
      titleFontSize: 12,
    },
    axisY: {
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
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
      titleFontFamily: "Poppins",
      labelFontFamily: "Poppins",
    },
    legend: {
      horizontalAlign: "bottom",
      verticalAlign: "bottom",
      cursor: "pointer",
      fontFamily: "Poppins",
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
