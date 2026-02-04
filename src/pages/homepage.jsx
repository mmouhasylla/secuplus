import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{t("homepage.title")}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					{/* Logo simplifié comme About */}
					<div className="homepage-logo-container">
						<Logo width={46} />
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<h1>{t("homepage.title")}</h1>
								</div>

								<div className="subtitle homepage-subtitle">
									{t("homepage.description")}
								</div>

								<div className="subtitle homepage-subtitle">
									{t("homepage.bodypage")}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="logo_secuplus.webp"
											alt="about"
											className="homepage-image"
											loading="lazy"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
