import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => (
  <section className={styles.hero}>
    <h2>Welcome to My Portfolio</h2>
    <div className={styles.profileCard}>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Name: </span>
        <span>Guillaume Elie</span>
      </div>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Role: </span>
        <span>Developer</span>
      </div>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Location: </span>
        <span>Montreal, Canada</span>
      </div>
    </div>
  </section>
);

export default Hero;
