import React from "react";
import styles from "./HomePage.module.scss";
import Title from "../ProfileComponent/Title";
import Header from "../ProfileComponent/Header";
import logo from "../../logo.svg";

const HomePage = () => (
  <div className={styles.homePage}>
    <Title text="Home" />
    <Header />
    <header className={styles.homeHeader}>
      <img src={logo} className={styles.homeLogo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={styles.homeLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default HomePage;
