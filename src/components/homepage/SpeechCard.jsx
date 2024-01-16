import React from "react";

import styles from "./styles.module.css";

const SpeechCard = ({ imgSrc, alt, text, designation }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={alt} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <p>{text}</p>
        <p>
          - <b>{designation}</b>
        </p>
      </div>
    </div>
  );
};

export default SpeechCard;
