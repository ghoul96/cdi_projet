import React from "react";
import { Link } from "react-router-dom";
import Title from "../ProfileComponent/Title";
import Header from "../ProfileComponent/Header";
import Footer from "../ProfileComponent/Footer";
import FullWidthBackground from "./FullWidthBackground";
import styles from "./Contact.module.scss";

function Contact() {
	return (
		<FullWidthBackground>
			<Title text="Contact" />
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
				<Header />
				<section className={styles.contactCard}>
					<nav style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
						<Link to="/" style={{ color: '#61dafb', fontWeight: 600, textDecoration: 'none' }}>Home</Link>
						<Link to="/profile" style={{ color: '#61dafb', fontWeight: 600, textDecoration: 'none' }}>Profil</Link>
						<Link to="/contact" style={{ color: '#61dafb', fontWeight: 600, textDecoration: 'none' }}>Contact</Link>
					</nav>
					<h2 className={styles.contactTitle}>Contact Information</h2>
					<div className={styles.contactField}>
						<span className={styles.contactLabel}>Email:</span>
						<span>Loghdlxx@gmail.com</span>
					</div>
					<div className={styles.contactField}>
						<span className={styles.contactLabel}>Phone:</span>
						<span>(438)402-3561</span>
					</div>
				</section>
				<Footer />
			</div>
		</FullWidthBackground>
	);
}

export default Contact;
