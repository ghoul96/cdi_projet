import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
  </footer>
);

export default Footer;
