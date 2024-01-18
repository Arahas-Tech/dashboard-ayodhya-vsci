import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";
import WaterBodiesLayer from "../GeoJSON/WaterBodies.json";
import "components/maps/Map.css";
import MarkerClusterWaterBodies from "../utils/MarkerCluster";

const WaterBodies = () => {
  const mapCenter = [26.7622, 82.1698];

  let markers;

  const addMarkers = () => {
    markers = [];

    WaterBodiesLayer?.features?.map((feature) =>
      markers.push({
        position: {
          latitude: feature.geometry.coordinates[1],
          longitude: feature.geometry.coordinates[0],
        },
        properties: feature.properties,
      })
    );
  };

  addMarkers();

  return (
    <MapContainer
      center={mapCenter}
      zoom={12}
      attributionControl={false}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      style={{ width: "100%", height: "61vh" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

      <MarkerClusterWaterBodies markers={markers} addMarkers={addMarkers} />

      <GeoJSON data={ADABoundary} style={{ color: "#fd9d24" }} />
    </MapContainer>
  );
};

export default WaterBodies;
