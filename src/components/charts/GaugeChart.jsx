import React, { useEffect } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { Card } from "antd";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const AQIGaugeChart = ({ aqiValue }) => {
  useEffect(() => {
    const chart = new CanvasJSChart("aqiChartContainer", {
      animationEnabled: true,
      theme: "light1",
      title: {
        text: "Air Quality Index (AQI)",
      },
      axisY: {
        minimum: 0,
        maximum: 100,
        interval: 20,
        suffix: " AQI",
      },
      data: [
        {
          type: "doughnut",
          startAngle: -90,
          innerRadius: 70,
          indexLabel: "{y}",
          dataPoints: [
            { y: aqiValue, color: getColorForAQI(aqiValue) },
            { y: 100 - aqiValue, color: "#e0e0e0" },
          ],
        },
      ],
    });

    chart.render();
  }, [aqiValue]);

  // Function to get color based on AQI value
  const getColorForAQI = (aqi) => {
    if (aqi <= 50) {
      return "#00e600"; // Good (Green)
    } else if (aqi <= 100) {
      return "#ffff00"; // Moderate (Yellow)
    } else if (aqi <= 150) {
      return "#ff9900"; // Unhealthy for Sensitive Groups (Orange)
    } else if (aqi <= 200) {
      return "#ff0000"; // Unhealthy (Red)
    } else if (aqi <= 300) {
      return "#99004c"; // Very Unhealthy (Purple)
    } else {
      return "#7e0023"; // Hazardous (Maroon)
    }
  };

  return (
    <Card id="aqiChartContainer" style={{ height: "300px", width: 500 }}></Card>
  );
};

export default AQIGaugeChart;
