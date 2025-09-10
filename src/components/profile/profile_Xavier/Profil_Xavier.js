
import React from 'react';
import './Styles.css';

const Profil_Xavier = () => {
	return (
		<div className="profile-card">
			<h1>Xavier Archambault</h1>
			<h2>Programmeur Analyste | Étudiant en Intelligence Artificielle</h2>
			<p style={{ fontSize: '1.05rem', marginBottom: 18 }}>
				Passionné par l'informatique, je possède un diplôme AEC de Programmeur Analyste et je débute mes études en intelligence artificielle. Curieux, adaptable et motivé, je maîtrise plusieurs langages et technologies du développement logiciel.
			</p>
			<div style={{ textAlign: 'left', margin: '0 auto', maxWidth: 320 }}>
				<strong>Contact :</strong>
				<div style={{ marginBottom: 10 }}>
					<a href="mailto:Xavier.Archambault.Pro@gmail.com" style={{ color: '#2d3a4b', textDecoration: 'none' }}>Xavier.Archambault.Pro@gmail.com</a>
				</div>
				<strong>Formations :</strong>
				<ul style={{ margin: '8px 0 14px 18px', padding: 0 }}>
                    <li>Collège CDI, Montreal — Profession de intelligence artificielle (2025 - en cours)</li>
					<li>Collège CDI, Laval — Programmeur-Analyste (2023 - 2025)</li>
					<li>Collège Lionel-Groulx — Techniques de l’informatique (2021-2022, 1 an)</li>
				</ul>
				<strong>Compétences techniques :</strong>
				<div className="language-list" style={{ margin: '10px 0 0 0' }}>
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
			<div style={{ marginTop: 22, fontSize: '0.98rem', color: '#4e5d6c' }}>
				<strong>Qualités :</strong> Intègre, adaptable, polyvalent, apprenant rapide, bilingue (français-anglais)
			</div>
		</div>
	);
};

export default Profil_Xavier;
