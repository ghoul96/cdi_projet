import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Profile</h1>
      <nav className={styles.nav}>
        <a href="#hero">Home</a>
        <Link to="/profile">About</Link>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
