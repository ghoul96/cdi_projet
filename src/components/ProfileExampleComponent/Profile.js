import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <Header />
      <div className={styles.content}>
        {/* Profile Card Data */}
        <div className={styles.profileCard}>
          <h2 className={styles.profileTitle}>Profile</h2>
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
        {/* Contact info moved to Contact.js */}
        </div>
        {/* Optionally keep Hero below profile card */}
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
