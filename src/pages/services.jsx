import React from "react";
import Layout from "../components/common/Layout";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import CONTENT from "../data/content";
import ServiceTimeline from "../components/services/ServiceTimeline";
import "./styles/services.css";

/**
 * Services Page
 * Displays a list of services with detailed timeline descriptions.
 */
const Services = () => {
    const { t } = useTranslation();

    return (
        <Layout active="services">
            <Helmet>
                <title>{t("services.title")} - SecuPlus</title>
            </Helmet>
            <div className="services-page">
                <div className="services-hero">
                    <div className="services-hero-content">
                        <h1>{t("services.title")}</h1>
                        <p>{t("services.description")}</p>
                    </div>
                </div>

                <div className="services-container">
                    {CONTENT.services.items.map((service, index) => (
                        <div key={service.id} id={service.link.split('#')[1]} className={`service-section ${index % 2 !== 0 ? 'bg-light' : ''}`}>
                            <div className="service-header-row">
                                <h2>{t(service.titleKey)}</h2>
                                <p className="service-description">{t(service.descKey)}</p>
                            </div>

                            <div className="service-process-container">
                                <h3>{t("services.process_title")}</h3>
                                <ServiceTimeline steps={service.process} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Services;
