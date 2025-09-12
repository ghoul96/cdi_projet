import React from "react";
import styles from "./FullWidthBackground.module.scss";

const FullWidthBackground = ({ children }) => (
  <div className={styles.fullWidthBg}>
    {children}
  </div>
);

export default FullWidthBackground;
