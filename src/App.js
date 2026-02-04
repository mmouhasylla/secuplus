import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import ActivitesEcons from "./pages/activites_econs";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}

		// Charger la langue sauvegardée
		const savedLang = localStorage.getItem("lang");
		if (savedLang) i18n.changeLanguage(savedLang);
	}, [i18n]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/partenaires" element={<Projects />} />
				<Route path="/activites" element={<ActivitesEcons />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;