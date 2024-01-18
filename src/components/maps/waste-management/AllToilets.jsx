import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "components/maps/Map.css";
import { allToilets } from "constants/Waste-Management/AllToilets";

import ADABoundary from "../GeoJSON/ADA_Boundary.json";

const AllToilets = () => {
  const mapCenter = [26.7922, 82.1998];
  let customMarker = L.icon({
    iconUrl: require("assets/ADA2023.png"),
    iconSize: [32, 32],
    iconAnchor: [32, 64],
  });

  return (
    <MapContainer
      center={mapCenter}
      zoom={15}
      attributionControl={false}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
      style={{
        width: "100%",
        height: "80vh",
        borderRadius: 5,
        boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
      }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

      <GeoJSON data={ADABoundary} style={{ color: "#fd9d24" }} />

      {allToilets.map((item) => (
        <Marker position={[item.latitude, item.longitude]} icon={customMarker}>
          <Popup>
            <div>
              <div>ULB Name {item.ULB}</div>
              <div>Toilet ID: {item.toilet_id}</div>
              <div>
                Google Status: {item.google_status === 1 ? "Yes" : "NO"}
              </div>
              <div>Owner Authority: {item.owner_authority}</div>
              <div>
                Fees Applicable: {item.fees_applicable === 1 ? "Yes" : "NO"}
              </div>
              <div>Cost: {item.cost}</div>
              <div>Google Status: {item.google_status}</div>
              <div>Google Status: {item.google_status}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default AllToilets;
