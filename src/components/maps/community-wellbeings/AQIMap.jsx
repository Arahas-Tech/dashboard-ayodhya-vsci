import React from "react";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";
import MarkerClusterAQI from "../utils/MarkerClusterAQI";

const AQIMap = ({ AQIs, aqiData }) => {
  const mapCenter = [26.7622, 82.1598];

  let markers;

  const addMarkers = () => {
    markers = [];

    if (AQIs) {
      aqiData?.map((point) =>
        markers.push({
          position: {
            latitude: point.latitude,
            longitude: point.longitude,
          },
          properties: { value: AQIs[point.id] },
        })
      );
    }
  };

  addMarkers();

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
      style={{ width: "100%", height: "60vh" }}
    >
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />

      <GeoJSON data={ADABoundary} style={{ color: "#fd9d24" }} />

      <MarkerClusterAQI markers={markers} addMarkers={addMarkers} />
    </MapContainer>
  );
};

export default AQIMap;
