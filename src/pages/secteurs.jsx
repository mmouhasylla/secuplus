import React from "react";
import Layout from "../components/common/Layout";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import SectorTabs from "../components/sectors/SectorTabs";
import "./styles/secteurs.css";

/**
 * Secteurs Page
 * Displays industry sectors using a tabbed interface.
 */
const Secteurs = () => {
    const { t } = useTranslation();

    return (
        <Layout active="secteurs">
            <Helmet>
                <title>{t("sectors.title")} - SecuPlus</title>
            </Helmet>
            <div className="secteurs-page">
                <div className="secteurs-hero">
                    <div className="secteurs-hero-content">
                        <h1>{t("sectors.title")}</h1>
                        <p>{t("sectors.intro")}</p>
                    </div>
                </div>

                <div className="secteurs-container">
                    <SectorTabs />
                </div>
            </div>
        </Layout>
    );
};

export default Secteurs;
