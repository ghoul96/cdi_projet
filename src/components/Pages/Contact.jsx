import React from "react";
import FullWidthBackground from "./FullWidthBackground.jsx";
import Title from "../ProfileComponent/Title.jsx";
import Header from "../ProfileComponent/Header.jsx";
import Footer from "../ProfileComponent/Footer.jsx";
import styles from "./Contact.module.scss";

function Contact() {
	return (
		<FullWidthBackground>
			<Title text="Contact" />
			<Header />
			<section className={styles.contactCard}>
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
		</FullWidthBackground>
	);
}

export default Contact;
