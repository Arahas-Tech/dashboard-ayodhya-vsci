import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "components/maps/Map.css";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";
import MarkerClusterToilets from "../utils/MarkerCluster";
import { allToilets } from "constants/Waste-Management/AllToilets";

const AllToilets = () => {
  const mapCenter = [26.7622, 82.1698];

  let markers;

  const addMarkers = () => {
    markers = [];

    allToilets?.map((feature) =>
      markers.push({
        position: {
          latitude: feature.latitude,
          longitude: feature.longitude,
        },
        properties: { ...feature },
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
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />

      <MarkerClusterToilets markers={markers} addMarkers={addMarkers} />

      <GeoJSON data={ADABoundary} style={{ color: "#fd9d24" }} />
    </MapContainer>
  );
};

export default AllToilets;
