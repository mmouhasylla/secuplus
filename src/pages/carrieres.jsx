import React from "react";
import Layout from "../components/common/Layout";
import { Helmet } from "react-helmet";
import CONTENT from "../data/content";
import "./styles/carrieres.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

/**
 * Careers Page
 * Displays items for recruitment, benefits, and job openings.
 */
const Careers = () => {
    const { t } = useTranslation();

    return (
        <Layout active="carrieres">
            <Helmet>
                <title>{t("careers.title")} - SecuPlus</title>
            </Helmet>
            <div className="careers-page">
                <div className="careers-hero" style={{ backgroundImage: "url('/logo_secuplus2.webp')" }}>
                    <div className="careers-hero-content">
                        <h1>{t("careers.hero_title")}</h1>
                        <p>{t("careers.hero_subtitle")}</p>
                    </div>
                </div>

                <div className="careers-container">

                    <div className="benefits-section">
                        <h2>{t("careers.benefits_title")}</h2>
                        <div className="benefits-grid">
                            {CONTENT.careers.benefits.map((benefitKey, index) => (
                                <div key={index} className="benefit-card">
                                    <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
                                    <span>{t(benefitKey)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="jobs-section">
                        <h2>{t("careers.jobs_title")}</h2>
                        <div className="jobs-list">
                            {CONTENT.careers.jobs.map((job, index) => (
                                <div key={index} className="job-card">
                                    <div className="job-info">
                                        <h3>{t(job.titleKey)}</h3>
                                        <div className="job-meta">
                                            <span><FontAwesomeIcon icon={faBriefcase} /> {t(job.typeKey)}</span>
                                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location}</span>
                                        </div>
                                    </div>
                                    <button className="apply-btn">{t("careers.apply_button")}</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="spontaneous-application">
                        <h3>{t("careers.spontaneous_title")}</h3>
                        <p>{t("careers.spontaneous_desc")}</p>
                        <a href="mailto:recrutement@secuplus.sn" className="email-btn">recrutement@secuplus.sn</a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
