import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
	return (
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
	);
}

export default Contact;
