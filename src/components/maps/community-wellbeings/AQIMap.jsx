import React from "react";
import { Progress, Row } from "antd";

import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";

const AQIMap = ({ AQIs, aqiData }) => {
  const mapCenter = [26.7622, 82.1598];

  const customIcon = new L.Icon({
    iconUrl: require("assets/svg/pin.svg").default,
    iconSize: [25, 25],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

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
      color: "rgb(255, 0, 0) ",
    },
    { range: [401, 700], label: "Severe", color: "rgb(192, 0, 0)" },
  ];

  const getColorForAqiParams = (aqi) => {
    const colorRange = aqiParamsColorsFullOpacity.find(
      (range) => aqi >= range.range[0] && aqi <= range.range[1]
    );
    return colorRange ? colorRange.color : "#ffffff";
  };

  return (
    <MapContainer
      attributionControl={false}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      center={mapCenter}
      zoom={11}
      minZoom={10}
      style={{ height: "60vh", width: "100%" }}
    >
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />

      <GeoJSON data={ADABoundary} style={{ color: "#fd9d24" }} />

      {aqiData?.map((point) => {
        const AQI = AQIs && AQIs[point.id];

        return (
          <Marker
            key={point.id}
            position={[point.latitude, point.longitude]}
            icon={customIcon}
          >
            <Popup>
              <Row align="middle" justify="space-evenly">
                <b className="popup-heading-aqi">AQI: </b>
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
              </Row>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default AQIMap;
