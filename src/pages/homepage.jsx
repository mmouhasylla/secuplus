import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Layout from "../components/common/Layout";
import HeroSlider from "../components/homepage/HeroSlider";
import StatsBand from "../components/homepage/StatsBand";
import TrustBar from "../components/homepage/TrustBar";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<Layout active="home">
			<Helmet>
				<title>{t("homepage.title")}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<HeroSlider />
			<StatsBand />
			<TrustBar />

			<div className="homepage-content-wrapper">
				<div className="homepage-container">

					{/* Redesigned About Section */}
					<div className="home-about-section">
						<div className="home-about-wrapper">
							<div className="home-about-image">
								<img src="/garde_du_corps.png" alt="Agent de sécurité SecuPlus" />
							</div>
							<div className="home-about-content">
								<h2 className="home-about-title">{t("homepage.about.title")}</h2>
								<p className="home-about-lead">{t("homepage.description")}</p>
								<p className="home-about-text">{t("homepage.bodypage")}</p>
								<a href="/about" className="home-about-cta">
									{t("homepage.about.cta")}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Homepage;
