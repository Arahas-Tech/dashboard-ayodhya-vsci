import React from "react";
import { Flex } from "antd";

import "leaflet/dist/leaflet.css";

import "components/maps/Map.css";

import OpenLand from "./OpenLand";
import Settlement from "./Settlement";
import Vegetation from "./Vegetation";
import Agriculture from "./Agriculture";
// import River from "./River";
// import RiverBed from "./RiverBed";
// import Canal from "./Canal";

const LandUse = () => {
  return (
    <>
      <Flex gap={16} vertical style={{ width: "100%" }}>
        <OpenLand />
        <Settlement />
        <Vegetation />
        {/* <River />
        <Canal />
        <RiverBed /> */}
        <Agriculture />
      </Flex>
    </>
  );
};

export default LandUse;
