import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} My Profile. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
