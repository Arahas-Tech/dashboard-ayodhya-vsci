import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";
import WaterBodiesLayer from "../GeoJSON/WaterBodies.json";
import "components/maps/Map.css";

const WaterBodies = () => {
  const mapCenter = [26.7622, 82.1698];

  const onEachFeature = (feature, layer) => {
    const properties = feature.properties;

    const popupContent = `<b>Name:</b> ${properties.Name}
    <br /> 
    <hr />
    <b>Perimeter:</b> ${properties.Perimeter} 
    <br />    <hr />
    <b>Village:</b> ${properties.Village} 
    <br/>     <hr />
    <b>Tehsil:</b> ${properties.Tehsil}
    <br/>    <hr />
    <b>District:</b> ${properties.District}
    <br/>     <hr />
    <b>Type of Water Body:</b> ${properties.Type_Water}
    <br/>     <hr />
    <b>Area (in ha):</b> ${properties.Area_in_Ha}
    <br/>`;

    layer.bindPopup(popupContent);
  };

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

      <GeoJSON data={ADABoundary} style={{ color: "#fd9d24" }} />
      <GeoJSON
        data={WaterBodiesLayer}
        style={{ color: "blue" }}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default WaterBodies;
