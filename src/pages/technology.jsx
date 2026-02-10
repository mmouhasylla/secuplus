import React from "react";
import Layout from "../components/common/Layout";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import TechGrid from "../components/technology/TechGrid";
import "./styles/technology.css";

/**
 * Technology Page
 * Displays technological solutions using a grid layout.
 */
const Technology = () => {
    const { t } = useTranslation();

    return (
        <Layout active="technology">
            <Helmet>
                <title>{t("technologies.title")} - SecuPlus</title>
            </Helmet>
            <div className="tech-page">
                <div className="tech-hero">
                    <div className="tech-hero-img"></div>
                    <div className="tech-hero-content">
                        <h1>{t("technologies.title")}</h1>
                        <p>{t("technologies.intro")}</p>
                    </div>
                </div>

                <div className="tech-container">
                    <TechGrid />
                </div>
            </div>
        </Layout>
    );
};

export default Technology;
