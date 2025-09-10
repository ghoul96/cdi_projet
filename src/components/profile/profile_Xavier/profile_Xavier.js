
import React from 'react';
import './styles.css';

const Profile_Xavier = () => {
	return (
		<div className="profile-container">
			<h1>Xavier Archambault</h1>
			<h2>Programmeur Analyste | Étudiant en Intelligence Artificielle</h2>
			<p>
				Passionné par l'informatique, je possède un diplôme AEC de Programmeur Analyste et je débute mes études en intelligence artificielle.
			</p>
			<div className="profile-main-block">
				<div className="section-block">
					<strong>Contact :</strong>
					<div className="contact-block">
						<p className="phone-number">Numéro de téléphone: 438-364-5936</p>
						<a href="mailto:Xavier.Archambault.Pro@gmail.com">Email: Xavier.Archambault.Pro@gmail.com</a>
						
					</div>
				</div>
				<div className="section-block">
					<strong>Formations :</strong>
					<ul>
						<li>Collège CDI, Montreal — Profession de intelligence artificielle (2025 - en cours)</li>
						<li>Collège CDI, Laval — Programmeur-Analyste (2023 - 2025)</li>
						<li>Collège Lionel-Groulx — Techniques de l’informatique (2021-2022, 1 an)</li>
					</ul>
				</div>
				<div className="section-block">
					<strong>Compétences techniques :</strong>
					<div className="language-list">
						<span className="language-item">C#</span>
						<span className="language-item">HTML</span>
						<span className="language-item">CSS</span>
						<span className="language-item">JavaScript</span>
						<span className="language-item">Java</span>
						<span className="language-item">JavaFX</span>
						<span className="language-item">SQL</span>
						<span className="language-item">MySQL</span>
						<span className="language-item">MongoDB</span>
						<span className="language-item">PHP</span>
						<span className="language-item">Node.js</span>
						<span className="language-item">WordPress</span>
						<span className="language-item">Android (Kotlin)</span>
					</div>
				</div>
			</div>
			<div className="qualities-block">
				<strong>Qualités :</strong> Intègre, adaptable, polyvalent, apprenant rapide, bilingue (français-anglais)
			</div>
		</div>
	);
};

export default Profile_Xavier;
