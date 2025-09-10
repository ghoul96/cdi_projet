import React from 'react';
import styles from './Profil.module.scss';

function Profil({ onClose }) {
  return (
    <>
      <div className={styles.profileOverlay} onClick={onClose}></div>
      <div className={styles.profileContainer}>
        <button className={styles.profileCloseBtn} onClick={onClose} title="Close">×</button>
        <h2 className={styles.profileTitle}>Profile</h2>
        <div className={styles.profileField}>
          <span className={styles.profileLabel}>Name:</span>
          <span>Jane Doe</span>
        </div>
        <div className={styles.profileField}>
          <span className={styles.profileLabel}>Email:</span>
          <span>jane.doe@email.com</span>
        </div>
        <div className={styles.profileField}>
          <span className={styles.profileLabel}>Role:</span>
          <span>Frontend Developer</span>
        </div>
        <div className={styles.profileField}>
          <span className={styles.profileLabel}>Location:</span>
          <span>Montreal, Canada</span>
        </div>
        <div className={styles.profileField}>
          <span className={styles.profileLabel}>Bio:</span>
          <span>Passionate about building beautiful and accessible web apps.</span>
        </div>
      </div>
    </>
  );
}

export default Profil;