import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useMap } from "react-leaflet";

const markerClusters = L.markerClusterGroup();
let customMarker = L.icon({
  iconUrl: require("assets/svg/Toilets.svg").default,
  iconSize: [24, 24],
  iconAnchor: [32, 64],
});

const MarkerClusterToilets = ({ markers, addMarkers }) => {
  const map = useMap();

  useEffect(() => {
    markerClusters?.clearLayers();
    markers?.forEach(({ position, properties }) => {
      const marker = L.marker(
        new L.LatLng(position.latitude, position.longitude),
        {
          icon: customMarker,
        }
      );

      marker.bindPopup(`<div>
      <div><b>ULB Name:</b> ${properties.ULB}</div>
      <div>
        <b>Google Status:</b> ${properties.google_status === 1 ? "Yes" : "NO"}
      </div>
      <div><b>Owner Authority:</b> ${properties.owner_authority}</div>
      <div>
      <b>Fees Applicable:</b> ${properties.fees_applicable === 1 ? "Yes" : "NO"}
      </div>
      <div><b>Cost:</b> ${properties.cost}</div>
      <div><b>Google Status:</b>  ${
        properties.google_status === 1 ? "Yes" : "NO"
      }</div>
    </div>`);

      marker?.addTo(markerClusters);
    });

    map?.addLayer(markerClusters);
  }, [markers, map]);

  map?.on("moveend", () => {
    addMarkers();
    const markersToAdd = [];
    markerClusters.clearLayers();
    markers?.forEach(({ position, properties }) => {
      const markerToAdd = L.marker(
        new L.LatLng(position.latitude, position.longitude),
        {
          icon: customMarker,
        }
      );

      markerToAdd.bindPopup(`<div>
      <div><b>ULB Name:</b> ${properties.ULB}</div>
      <div>
        <b>Google Status:</b> ${properties.google_status === 1 ? "Yes" : "NO"}
      </div>
      <div><b>Owner Authority:</b> ${properties.owner_authority}</div>
      <div>
      <b>Fees Applicable:</b> ${properties.fees_applicable === 1 ? "Yes" : "NO"}
      </div>
      <div><b>Cost:</b> ${properties.cost}</div>
      <div><b>Google Status:</b>  ${
        properties.google_status === 1 ? "Yes" : "NO"
      }</div>
    </div>`);

      if (markerToAdd !== undefined) {
        markersToAdd?.push(markerToAdd);
      }
    });

    markerClusters?.addLayers(markersToAdd);
  });

  return null;
};

export default MarkerClusterToilets;
