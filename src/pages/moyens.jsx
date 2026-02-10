import React from "react";
import Layout from "../components/common/Layout";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import LogisticsGrid from "../components/logistics/LogisticsGrid";
import "./styles/moyens.css";

/**
 * Moyens Page (Logistics)
 * Displays company logistical resources and equipment.
 */
const Moyens = () => {
    const { t } = useTranslation();

    return (
        <Layout active="moyens">
            <Helmet>
                <title>{t("logistics.title")} - SecuPlus</title>
            </Helmet>
            <div className="moyens-page">
                <div className="moyens-hero">
                    <div className="moyens-hero-content">
                        <h1>{t("logistics.title")}</h1>
                    </div>
                </div>

                <div className="moyens-container">
                    <div className="moyens-intro">
                        <h2>{t("logistics.intro_title")}</h2>
                        <p>{t("logistics.intro_desc")}</p>
                    </div>
                    <LogisticsGrid />
                </div>
            </div>
        </Layout>
    );
};

export default Moyens;
