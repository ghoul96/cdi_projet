import React from "react";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h2>Welcome to My Profile</h2>
      <p>
        This is a simple hero section. You can showcase your skills, projects,
        or anything else here.
      </p>
      <button className={styles.button}>Learn More</button>
    </section>
  );
}

export default Hero;
