import React from "react";

import styles from "../componentStyle.module.css";

const ValueCard = ({ parameter, borderColor }) => {
  return (
    <div
      key={parameter.key}
      className={styles.aqiParamCard}
      style={
        ["so2", "pm2.5", "pm10", "no2"].includes(parameter.key)
          ? {
              borderBottom: `2px solid ${borderColor}`,
            }
          : {}
      }
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
  );
};

export default ValueCard;
