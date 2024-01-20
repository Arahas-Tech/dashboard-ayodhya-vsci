import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import RiverBed_2024 from "../GeoJSON/LandUse_2024/RiverBed.json";

import "components/maps/Map.css";
import { Badge, Card } from "antd";

const RiverBed = () => {
  const mapCenter = [26.7622, 82.1698];

  return (
    <>
      <Badge.Ribbon placement="start" text="2017">
        <Card>
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
            style={{ width: "30vw", height: "61vh" }}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />

            <GeoJSON data={RiverBed_2024} style={{ color: "#fd9d24" }} />
          </MapContainer>
        </Card>
      </Badge.Ribbon>
    </>
  );
};

export default RiverBed;
