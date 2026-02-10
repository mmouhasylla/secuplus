import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import NavBar from "../components/common/navBar";
import TopBar from "../components/common/TopBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import SEO from "../data/seo";

import "./styles/projects.css";

/**
 * Projects Page (Partenaires)
 * Displays a list of partners/projects and engagement information.
 * Note: 'projects.jsx' maps to the 'Partenaires' (Partners) route/concept in this context.
 */
const Projects = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find(item => item.page === "projects");

	return (
		<>
			<Helmet>
				<title>{`${t("projects.nav_title")} | ${t("main.title")}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<TopBar />
				<NavBar active="partenaires" />

				<div className="content-wrapper">


					<div className="projects-container">
						<div className="title projects-title">{t("projects.title")}</div>

						<div className="subtitle projects-subtitle">
							{t("projects.subtitle")}
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>

						<div className="projects-engagement">
							<div className="title projects-title">
								{t("projects.engagement_title")}
							</div>
							<div className="subtitle projects-subtitle">
								{t("projects.engagement_text")}
							</div>
						</div>
					</div>

				</div>

			</div>
			<Footer />
		</>
	);
};

export default Projects;
