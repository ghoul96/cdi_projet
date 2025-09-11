import React from "react";
import Title from "../ProfileComponent/Title";
import Header from "../ProfileComponent/Header";
import Hero from "../ProfileComponent/Hero";
import Footer from "../ProfileComponent/Footer";
import FullWidthBackground from "./FullWidthBackground";
import styles from "./Profile.module.scss";

function Profile() {
  return (
    <FullWidthBackground>
      <Title text="My Profile" />
      <Header />
      <div className={styles.profileContainer}>
        <div className={styles.content}>
          {/* Profile Card Data */}
          <div className={styles.profileCard}>
            <div className={styles.profileField}>
              <span className={styles.profileLabel}>Name:</span>
              <span>Guillaume Elie</span>
            </div>
            <div className={styles.profileField}>
              <span className={styles.profileLabel}>Role:</span>
              <span>Developer</span>
            </div>
            <div className={styles.profileField}>
              <span className={styles.profileLabel}>Location:</span>
              <span>Montreal, Canada</span>
            </div>
          </div>
          {/* Optionally keep Hero below profile card */}
          <Hero />
        </div>
        <Footer />
      </div>
    </FullWidthBackground>
  );
}

export default Profile;
