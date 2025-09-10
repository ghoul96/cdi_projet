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
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
