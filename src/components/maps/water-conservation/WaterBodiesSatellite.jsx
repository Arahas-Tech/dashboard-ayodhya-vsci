import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";
import WaterBodies_2024 from "../GeoJSON/WaterBodies_2024.json";
import WaterBodies_2020 from "../GeoJSON/WaterBodies_2020.json";
import WaterBodies_2017 from "../GeoJSON/WaterBodies_2017.json";

import "components/maps/Map.css";
import { Badge, Card, Col, Row } from "antd";

const WaterBodiesSatellite = () => {
  const mapCenter = [26.7622, 82.1698];

  return (
    <>
      <Row>
        <Col span={24}>
          <Badge.Ribbon placement="start" text="2024">
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
                style={{ width: "100%", height: "61vh" }}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
                <GeoJSON
                  data={ADABoundary}
                  style={{ color: "#fd9d24", fillOpacity: 0 }}
                />
                <GeoJSON
                  data={WaterBodies_2024}
                  style={{ color: "lightblue" }}
                />
              </MapContainer>
            </Card>
          </Badge.Ribbon>
        </Col>

        <Col span={24}>
          <Badge.Ribbon placement="start" text="2020">
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
                style={{ width: "100%", height: "61vh" }}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
                <GeoJSON
                  data={ADABoundary}
                  style={{ color: "#fd9d24", fillOpacity: 0 }}
                />
                <GeoJSON
                  data={WaterBodies_2020}
                  style={{ color: "lightblue" }}
                />
              </MapContainer>
            </Card>
          </Badge.Ribbon>
        </Col>

        <Col span={24}>
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
                style={{ width: "100%", height: "61vh" }}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
                <GeoJSON
                  data={ADABoundary}
                  style={{ color: "#fd9d24", fillOpacity: 0 }}
                />
                <GeoJSON
                  data={WaterBodies_2017}
                  style={{ color: "lightblue" }}
                />
              </MapContainer>
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
    </>
  );
};

export default WaterBodiesSatellite;
