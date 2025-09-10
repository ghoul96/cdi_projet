import React from 'react';
import styles from './Profil.module.scss';

function Profil() {
  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileTitle}>---Profile---</h2>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Name:</span>
        <span>Guillaume Elie</span>
      </div>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Email:</span>
        <span>Loghdlxx@gmail.com</span>
      </div>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Role:</span>
        <span>Developer</span>
      </div>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Location:</span>
        <span>Montreal, Canada</span>
      </div>
      <div className={styles.profileField}>
        <span className={styles.profileLabel}>Phone:</span>
        <span>(438)402-3561</span>
      </div>
    </div>
  );
}

export default Profil;