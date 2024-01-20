import React from "react";

import styles from "../componentStyle.module.css";
import { Tooltip } from "antd";

const ValueCard = ({ parameter, aqiTooltipValues }) => {
  return (
    <Tooltip
      placement="bottom"
      defaultOpen={false}
      title={() =>
        Object.entries(aqiTooltipValues[0]).map(([key, value]) => {
          return key === parameter.name ? value : undefined;
        })
      }
    >
      <div
        className={styles.aqiParamCard}
        // style={
        //   ["so2", "pm2.5", "pm10", "no2"].includes(parameter.key)
        //     ? {
        //         borderBottom: `2px solid ${borderColor}`,
        //       }
        //     : {}
        // }
      >
        <div className={styles.paramsValueUnit}>
          <div className={styles.paramsValue}>
            {parseFloat(parameter.value).toFixed(2)}
          </div>
          <div className={styles.paramsTitle}>
            {parameter.name} ({parameter.unit})
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default ValueCard;
