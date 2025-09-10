import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Profile</h1>
      <nav>
        <a href="#hero" className={styles.link}>Home</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
