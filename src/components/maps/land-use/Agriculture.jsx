import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";
import Agriculture_2024 from "../GeoJSON/LandUse_2024/Agriculture_Fallow.json";
import Agriculture_2020 from "../GeoJSON/LandUse_2020/Agriculture_Fallow.json";
import Agriculture_2017 from "../GeoJSON/LandUse_2017/Agriculture_Fallow.json";

import "components/maps/Map.css";
import { Badge, Card, Col, Row } from "antd";

const Agriculture = () => {
  const mapCenter = [26.7622, 82.1698];

  return (
    <>
      <Card title="Agriculture & Fallow Land">
        <Row gutter={[2, 2]} justify="center">
          <Col xs={24} md={12} lg={8}>
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
                  <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
                  <GeoJSON data={ADABoundary} style={{ color: "#fff" }} />
                  <GeoJSON
                    data={Agriculture_2017}
                    style={{ color: "#3F7E44" }}
                  />
                </MapContainer>
              </Card>
            </Badge.Ribbon>
          </Col>

          <Col xs={24} md={12} lg={8}>
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
                  <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
                  <GeoJSON data={ADABoundary} style={{ color: "#fff" }} />
                  <GeoJSON
                    data={Agriculture_2020}
                    style={{ color: "#3F7E44" }}
                  />
                </MapContainer>
              </Card>
            </Badge.Ribbon>
          </Col>

          <Col xs={24} md={12} lg={8}>
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
                  <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
                  <GeoJSON data={ADABoundary} style={{ color: "#fff" }} />
                  <GeoJSON
                    data={Agriculture_2024}
                    style={{ color: "#3F7E44" }}
                  />
                </MapContainer>
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Agriculture;
