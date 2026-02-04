import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./styles/footer.css";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{t("navbar.home")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">{t("navbar.about")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">{t("navbar.projects")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/activites">{t("navbar.activities")}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">{t("navbar.contact")}</Link>
						</li>
					</ul>
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