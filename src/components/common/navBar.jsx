import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CONTENT from "../../data/content";
import "./styles/navBar.css";

/**
 * Navigation Bar Component
 * Displays the top navigation links and dropdowns.
 * Handles language switching and responsive behavior.
 * 
 * @param {Object} props - Component props
 * @param {string} props.active - The current active page identifier
 */
const NavBar = ({ active }) => {
	const { t, i18n } = useTranslation();
	const [langDropdown, setLangDropdown] = useState(false);
	const dropdownRef = useRef(null);

	/**
	 * Switches the application language.
	 * @param {string} lang - The language code ('fr' or 'en')
	 */
	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setLangDropdown(false);
	};

	const toggleLangDropdown = () => {
		setLangDropdown(!langDropdown);
	};

	// Close dropdown when clicking outside
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
						{/* Home Link */}
						<li className={active === "home" ? "nav-item active" : "nav-item"}>
							<Link to="/">{t("navbar.home")}</Link>
						</li>

						{/* About Link */}
						<li className={active === "about" ? "nav-item active" : "nav-item"}>
							<Link to="/about">{t("navbar.about")}</Link>
						</li>

						{/* Services Dropdown */}
						<li className={active === "services" ? "nav-item active dropdown-parent" : "nav-item dropdown-parent"}>
							<Link to="/services">{t("activities.title")} <span className="arrow">▼</span></Link>
							<ul className="dropdown-menu">
								{CONTENT.services.items.map(item => (
									<li key={item.id} className="dropdown-link">
										<Link to={item.link}>{t(item.titleKey)}</Link>
									</li>
								))}
							</ul>
						</li>

						{/* Sectors Dropdown */}
						<li className={active === "secteurs" ? "nav-item active dropdown-parent" : "nav-item dropdown-parent"}>
							<Link to="/secteurs">{t("sectors.title")} <span className="arrow">▼</span></Link>
							<ul className="dropdown-menu">
								{CONTENT.sectors.items.map(item => (
									<li key={item.id} className="dropdown-link">
										<Link to={item.link}>{t(item.titleKey)}</Link>
									</li>
								))}
							</ul>
						</li>

						{/* Technology Link */}
						<li className={active === "technology" ? "nav-item active" : "nav-item"}>
							<Link to="/technologies">{t("technologies.title")}</Link>
						</li>

						{/* Logistics Link */}
						<li className={active === "moyens" ? "nav-item active" : "nav-item"}>
							<Link to="/moyens">{t("logistics.title")}</Link>
						</li>

						{/* Careers Link */}
						<li className={active === "carrieres" ? "nav-item active" : "nav-item"}>
							<Link to="/carrieres">{t("careers.title")}</Link>
						</li>

						{/* Contact Link */}
						<li className={active === "contact" ? "nav-item active" : "nav-item"}>
							<Link to="/contact">{t("navbar.contact")}</Link>
						</li>

						{/* Language Selector */}
						<li className="nav-item lang-dropdown" ref={dropdownRef}>
							<button
								className={`lang-trigger ${langDropdown ? 'active' : ''}`}
								onClick={toggleLangDropdown}
								aria-label="Change Language"
							>
								{i18n.language === 'fr' ? '🇫🇷' : '🇬🇧'}
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