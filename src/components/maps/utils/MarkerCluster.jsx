import { useEffect } from "react";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useMap } from "react-leaflet";

const markerClusters = L.markerClusterGroup();
let customMarker = L.icon({
  iconUrl: require("assets/svg/pond.svg").default,
  iconSize: [24, 24],
  iconAnchor: [32, 64],
});

const MarkerClusterWaterBodies = ({ markers, addMarkers }) => {
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

      marker.bindPopup(`<b>Name:</b> ${properties.Name}
      <br /> 
      <b>Perimeter:</b> ${properties.Perimeter} 
      <br />
      <b>Village:</b> ${properties.Village} 
      <br/> 
      <b>Tehsil:</b> ${properties.Tehsil}
      <br/>
      <b>District:</b> ${properties.District}
      <br/> 
      <b>Type of Water Body:</b> ${properties["Type of Water Body"]}
      <br/> 
      <b>Area (in ha):</b> ${properties["Area (in ha)"]}
      <br/> 
      <b>Gata Number:</b> ${properties.Gata_Number}`);

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

      markerToAdd.bindPopup(`<b>Name:</b> ${properties.Name}
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
      <b>Type of Water Body:</b> ${properties["Type of Water Body"]}
      <br/>     <hr />
      <b>Area (in ha):</b> ${properties["Area (in ha)"]}
      <br/>     <hr />
      <b>Gata Number:</b> ${properties.Gata_Number}`);

      if (markerToAdd !== undefined) {
        markersToAdd?.push(markerToAdd);
      }
    });

    markerClusters?.addLayers(markersToAdd);
  });

  return null;
};

export default MarkerClusterWaterBodies;
