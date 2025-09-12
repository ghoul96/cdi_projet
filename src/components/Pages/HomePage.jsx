import React from "react";
import styles from "./HomePage.module.scss";
import Title from "../ProfileComponent/Title.jsx";
import Header from "../ProfileComponent/Header.jsx";
import logo from "../../logo.svg";
import Footer from "../ProfileComponent/Footer.jsx";

const HomePage = () => (
  <div className={styles.homePage}>
    <Title text="Home" />
    <Header />
    <header className={styles.homeHeader}>
      <img src={logo} className={styles.homeLogo} alt="logo" />
      <p>
        Grizz's React App
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
    <Footer />
  </div>
);

export default HomePage;
