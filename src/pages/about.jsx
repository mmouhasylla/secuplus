import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import TopBar from "../components/common/TopBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import SEO from "../data/seo";
import "./styles/about.css";

/**
 * About Page
 * Displays information about the company, its values, and social links.
 */
const About = () => {

	const { t } = useTranslation();
	useEffect(() => { window.scrollTo(0, 0); }, []);
	const currentSEO = SEO.find(item => item.page === "about");


	return (
		<>
			<Helmet>
				<title>{`${t("about.title")} | ${t("main.title")}`}</title>
				<meta name="description" content={currentSEO.description} />
			</Helmet>

			<div className="page-content">
				<TopBar />
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<Logo width={46} />
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">{t("about.title")}</div>
								<div className="subtitle about-subtitle">{t("about.description")}</div>

								<ul className="about-subtitle-list">
									{t("about.sub", { returnObjects: true }).map((text, i) => (
										<li key={i} className="subtitle about-subtitle">{text}</li>
									))}
								</ul>

								<div className="subtitle about-subtitle">{t("about.description2")}</div>
								<ul className="about-subtitle-list">
									{t("about.values", { returnObjects: true }).map((v, i) => (
										<li key={i} className="subtitle about-subtitle">{v}</li>
									))}
								</ul>

								<div className="subtitle about-subtitle special-text">{t("about.mot_de_fin")}</div>
							</div>

							<div className="about-left-side">
								<img src="/logo_secuplus2.webp" alt="about" className="about-image" />
								<span className="about-image-shadow" />
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
