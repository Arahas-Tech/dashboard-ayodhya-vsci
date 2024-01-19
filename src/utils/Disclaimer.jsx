import React from "react";

import { FloatButton, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import styles from "./utilsStyles.module.css";

const Disclaimer = ({ language }) => {
  return (
    <>
      <Tooltip
        placement="top"
        title={() =>
          language ? (
            <p className={styles.disclaimerText}>
              "THE BETA SOFTWARE HEREUNDER MAY CONTAIN SOME DEFECTS AND PRIMARY
              PURPOSE OF THIS BETA TESTING IS TO OBTAIN FEEDBACK ON SOFTWARE
              PERFORMANCE, IDENTIFICATION OF AREAS OF IMPROVEMENT & DEFECTS.
              USER ARE EXPECTED TO EXERCISE CAUTION WHILE USING THE SOFTWARE
              AND/OR ACCOMPANYING MATERIALS."
            </p>
          ) : (
            <p className={styles.disclaimerText}>
              "यहां दिए गए बीटा सॉफ़्टवेयर में कुछ खामियां हो सकती हैं और
              प्राथमिक इस बीटा परीक्षण का उद्देश्य सॉफ़्टवेयर पर प्रतिक्रिया
              प्राप्त करना है प्रदर्शन, सुधार और दोष के क्षेत्रों की पहचान।
              उपयोगकर्ता सॉफ़्टवेयर और/या का उपयोग करते समय सावधानी बरतने की
              अपेक्षा की जाती है साथ में सामग्री।"
            </p>
          )
        }
      >
        <FloatButton
          icon={<QuestionCircleOutlined className={styles.disclaimerIcon} />}
          description="Beta Disclaimer"
          shape="rectangle"
          className={styles.disclaimer}
        />
      </Tooltip>
    </>
  );
};

export default Disclaimer;
