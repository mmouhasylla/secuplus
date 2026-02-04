import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = () => {
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const [langDropdown, setLangDropdown] = useState(false);
	const dropdownRef = useRef(null);

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setLangDropdown(false);
	};

	const toggleLangDropdown = () => {
		setLangDropdown(!langDropdown);
	};

	// Fermer le dropdown en cliquant à l'extérieur
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setLangDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
							<Link to="/">{t("navbar.home")}</Link>
						</li>
						<li className={location.pathname === "/about" ? "nav-item active" : "nav-item"}>
							<Link to="/about">{t("navbar.about")}</Link>
						</li>
						<li className={location.pathname === "/partenaires" ? "nav-item active" : "nav-item"}>
							<Link to="/partenaires">{t("navbar.projects")}</Link>
						</li>
						<li className={location.pathname === "/activites" ? "nav-item active" : "nav-item"}>
							<Link to="/activites">{t("navbar.activities")}</Link>
						</li>
						<li className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
							<Link to="/contact">{t("navbar.contact")}</Link>
						</li>

						{/* Dropdown Langue - CLIC */}
						<li className="nav-item lang-dropdown" ref={dropdownRef}>
							<button
								className={`lang-trigger ${langDropdown ? 'active' : ''}`}
								onClick={toggleLangDropdown}
							>
								{i18n.language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
								<span className="dropdown-arrow">▼</span>
							</button>
							{langDropdown && (
								<div className="lang-dropdown-menu">
									<button
										className={i18n.language === 'fr' ? 'lang-option active' : 'lang-option'}
										onClick={() => handleLanguageChange('fr')}
									>
										🇫🇷 Français
									</button>
									<button
										className={i18n.language === 'en' ? 'lang-option active' : 'lang-option'}
										onClick={() => handleLanguageChange('en')}
									>
										🇬🇧 English
									</button>
								</div>
							)}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;