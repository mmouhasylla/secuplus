import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import INFO from "../../data/user";
import "./styles/footer.css";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-columns">
					{/* Column 1: Nos Services */}
					<div className="footer-column">
						<h3 className="footer-title">{t("footer.services_title")}</h3>
						<ul className="footer-list">
							<li><Link to="/services">{t("services.items.incendie.title")}</Link></li>
							<li><Link to="/services">{t("services.items.surveillance.title")}</Link></li>
							<li><Link to="/services">{t("services.items.evenementiel.title")}</Link></li>
							<li><Link to="/services">{t("services.items.incendie.title")}</Link></li>
							<li><Link to="/moyens">{t("logistics.title")}</Link></li>
							<li><Link to="/services">{t("services.items.gardiennage.title")}</Link></li>
							<li><Link to="/services">{t("services.items.convoyage.title")}</Link></li>
						</ul>
					</div>

					{/* Column 2: Nos Domaines d'Expertise */}
					<div className="footer-column">
						<h3 className="footer-title">{t("footer.sectors_title")}</h3>
						<ul className="footer-list">
							<li><Link to="/secteurs">{t("sectors.items.bancaire.title")}</Link></li>
							<li><Link to="/secteurs">{t("sectors.items.diplomatie.title")}</Link></li>
							<li><Link to="/secteurs">{t("sectors.items.industriel.title")}</Link></li>
							<li><Link to="/secteurs">{t("sectors.items.residentiel.title")}</Link></li>
							<li><Link to="/projects">{t("projects.nav_title")}</Link></li>
						</ul>
					</div>

					{/* Column 3: À propos & Contact */}
					<div className="footer-column">
						<h3 className="footer-title">{t("footer.about_title")}</h3>
						<ul className="footer-list">
							<li><Link to="/">{t("footer.news")}</Link></li>
							<li><Link to="/carrieres">{t("footer.recruitment")}</Link></li>
							<li><Link to="/contact">{t("footer.contact")}</Link></li>
							<li><Link to="/about">{t("footer.who_are_we")}</Link></li>
							<li><Link to="/">{t("footer.legal")}</Link></li>
						</ul>

						<div className="footer-contact-info">
							<p>
								<span style={{ display: 'block' }}>{INFO.socials.telephone3}</span>
								<span style={{ display: 'block' }}>{INFO.socials.telephone1}</span>
							</p>
							<div className="footer-socials">
								{/* Add social icons here if needed */}
							</div>
						</div>
					</div>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						{t("footer.copyright", { year: new Date().getFullYear() })}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;