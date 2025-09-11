import React from "react";
import Title from "../ProfileComponent/Title";
import Header from "../ProfileComponent/Header";
import Footer from "../ProfileComponent/Footer";
import FullWidthBackground from "./FullWidthBackground";
import styles from "./Contact.module.scss";

function Contact() {
	return (
		<FullWidthBackground>
			<Title text="Contact Information" />
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
				<Header />
				<section className={styles.contactCard}>
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
