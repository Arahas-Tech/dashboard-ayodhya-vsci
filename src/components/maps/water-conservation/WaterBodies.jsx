import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";
import WaterBodiesLayer from "../GeoJSON/WaterBodies.json";
import "components/maps/Map.css";

const WaterBodies = () => {
  const mapCenter = [26.7622, 82.1698];
  let customMarker = L.icon({
    iconUrl: require("assets/svg/pond.svg").default,
    iconSize: [24, 24],
    iconAnchor: [32, 64],
  });

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
      <TileLayer url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}" />

      <GeoJSON data={ADABoundary}>
        {WaterBodiesLayer.features.map((feature) => {
          return (
            feature && (
              <Marker
                position={[
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0],
                ]}
                icon={customMarker}
              >
                <Popup></Popup>
              </Marker>
            )
          );
        })}
      </GeoJSON>
    </MapContainer>
  );
};

export default WaterBodies;
