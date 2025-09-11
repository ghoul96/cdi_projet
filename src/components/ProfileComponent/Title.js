import React from "react";
import styles from "./Title.module.scss";

const Title = ({ text }) => (
  <h1 className={styles.title}>{text}</h1>
);

export default Title;
