import React from "react";
import Title from "../ProfileComponent/Title.jsx";
import Header from "../ProfileComponent/Header.jsx";
import Hero from "../ProfileComponent/Hero.jsx";
import Footer from "../ProfileComponent/Footer.jsx";
import FullWidthBackground from "./FullWidthBackground.jsx";
import styles from "./Profile.module.scss";

function Profile() {
  return (
    <FullWidthBackground>
      <Title text="My Profile" />
      <Header />
      <div className={styles.profileContainer}>
        <div className={styles.content}>
        </div>
        <Hero />
        <Footer />
      </div>
    </FullWidthBackground>
  );
}

export default Profile;
