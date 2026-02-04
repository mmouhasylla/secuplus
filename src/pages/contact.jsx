import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import ContactForm from "../components/contact/contactForm";

const Contact = () => {
	const { t } = useTranslation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${t("contact.title")} | ${t("contact.title")}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<Logo width={46} />
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							{t("contact.title")}
						</div>

						<div className="subtitle contact-subtitle">
							{t("contact.paragraph1", { email: INFO.main.email })}
						</div>

						<div className="subtitle contact-subtitle">
							{t("contact.paragraph2")}
						</div>

						<div className="subtitle contact-subtitle">
							<ContactForm />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;