import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { Popup, useMap } from "react-leaflet";

import { Progress, Row } from "antd";

const markerClusters = L.markerClusterGroup();
let customMarker = L.icon({
  iconUrl: require("assets/svg/pin.svg").default,
  iconSize: [24, 24],
  iconAnchor: [32, 64],
});

const MarkerClusterAQI = ({ markers, addMarkers }) => {
  const map = useMap();

  const aqiParamsColorsFullOpacity = [
    { range: [0, 50], label: "Good", color: "rgb(0, 176, 80)" },
    {
      range: [51, 100],
      label: "Satisfactory",
      color: "rgb(146, 208, 80)",
    },
    {
      range: [101, 200],
      label: "Moderate",
      color: "rgb(255, 255, 0)",
    },
    { range: [201, 300], label: "Poor", color: "rgb(255, 153, 0)" },
    {
      range: [301, 400],
      label: "Very Poor",
      color: "rgb(255, 0, 0) ",
    },
    { range: [401, 700], label: "Severe", color: "rgb(192, 0, 0)" },
  ];

  const getColorForAqiParams = (aqi) => {
    const colorRange = aqiParamsColorsFullOpacity.find(
      (range) => aqi >= range.range[0] && aqi <= range.range[1]
    );
    return colorRange ? colorRange.color : "#ffffff";
  };

  useEffect(() => {
    markerClusters?.clearLayers();
    markers?.forEach(({ position, properties }) => {
      const marker = L.marker(
        new L.LatLng(position.latitude, position.longitude),
        {
          icon: customMarker,
        }
      );

      marker.bindPopup(
        `
            <b className="popup-heading-aqi">AQI: </b>
            <div style={{ color: ${getColorForAqiParams(properties.value)} }}>
              <b>${properties.value}</b>
            </div>
        `
      );

      marker?.addTo(markerClusters);
    });

    map?.addLayer(markerClusters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      markerToAdd.bindPopup(
        `
            <b className="popup-heading-aqi">AQI: </b>
            <div style={{ color: ${getColorForAqiParams(properties.value)} }}>
              <b>${properties.value}</b>
            </div>
        `
      );

      if (markerToAdd !== undefined) {
        markersToAdd?.push(markerToAdd);
      }
    });

    markerClusters?.addLayers(markersToAdd);
  });

  return null;
};

export default MarkerClusterAQI;
