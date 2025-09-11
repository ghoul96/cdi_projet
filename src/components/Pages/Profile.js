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
      <Title text="Profile" />
      <Header />
      <div
        className={styles.profileContainer}
        style={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          padding: '0',
        }}
      >
        <div
          className={styles.content}
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '2rem auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {/* Profile Card Data */}
          <div
            className={styles.profileCard}
            style={{
              width: '100%',
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              background: 'rgba(40,44,52,0.85)',
              padding: '2rem 1.5rem',
              color: '#61dafb',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(97,218,251,0.12)',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className={styles.profileField}
              style={{
                marginBottom: '1.2rem',
                fontSize: '1.15rem',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(40,44,52,0.7)',
                borderRadius: '12px',
                padding: '0.8rem 1.2rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                color: '#61dafb',
                width: '100%',
                maxWidth: '500px',
                boxSizing: 'border-box',
              }}
            >
              <span
                className={styles.profileLabel}
                style={{
                  fontWeight: 700,
                  marginRight: '0.8rem',
                  color: '#61dafb',
                  textShadow: '0 2px 8px rgba(97,218,251,0.15)',
                }}
              >
                Name:
              </span>
              <span>Guillaume Elie</span>
            </div>
            <div
              className={styles.profileField}
              style={{
                marginBottom: '1.2rem',
                fontSize: '1.15rem',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(40,44,52,0.7)',
                borderRadius: '12px',
                padding: '0.8rem 1.2rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                color: '#61dafb',
                width: '100%',
                maxWidth: '500px',
                boxSizing: 'border-box',
              }}
            >
              <span
                className={styles.profileLabel}
                style={{
                  fontWeight: 700,
                  marginRight: '0.8rem',
                  color: '#61dafb',
                  textShadow: '0 2px 8px rgba(97,218,251,0.15)',
                }}
              >
                Role:
              </span>
              <span>Developer</span>
            </div>
            <div
              className={styles.profileField}
              style={{
                marginBottom: '1.2rem',
                fontSize: '1.15rem',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(40,44,52,0.7)',
                borderRadius: '12px',
                padding: '0.8rem 1.2rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                color: '#61dafb',
                width: '100%',
                maxWidth: '500px',
                boxSizing: 'border-box',
              }}
            >
              <span
                className={styles.profileLabel}
                style={{
                  fontWeight: 700,
                  marginRight: '0.8rem',
                  color: '#61dafb',
                  textShadow: '0 2px 8px rgba(97,218,251,0.15)',
                }}
              >
                Location:
              </span>
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
