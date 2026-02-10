import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import NavBar from "../components/common/navBar";
import TopBar from "../components/common/TopBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/activite.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShieldAlt, faUserSecret, faTruck, faVideo, faCalendarAlt, faWalkieTalkie, faCar, faDog
} from '@fortawesome/free-solid-svg-icons';

const ActivitesEcons = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "activites");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${t("activities.title")} | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>
            <div className="page-content">
                <TopBar />
                <NavBar active="activites" />
                <div className="content-wrapper">
                    <div className="activite-logo-container">
                        <Logo width={46} />
                    </div>
                    <div className="activite-container">
                        <div className="title activite-title">
                            {t("activities.title")}
                        </div>
                        <div className="expertise-showcase">
                            <div className="expertise-section">
                                <div className="section-header">
                                    <FontAwesomeIcon icon={faShieldAlt} className="section-icon" />
                                    <h2 className="section-title">{t("activities.mainActivities")}</h2>
                                </div>
                                <div className="expertise-grid">
                                    <div className="expertise-card">
                                        <div className="card-visual">
                                            <FontAwesomeIcon icon={faShieldAlt} className="card-main-icon" />
                                        </div>
                                        <h3 className="card-title">{t("activities.structuralWorks")}</h3>
                                        <p className="card-description">Surveillance de sites industriels, commerciaux et résidentiels.</p>
                                    </div>
                                    <div className="expertise-card">
                                        <div className="card-visual">
                                            <FontAwesomeIcon icon={faUserSecret} className="card-main-icon" />
                                        </div>
                                        <h3 className="card-title">{t("activities.finishingWorks")}</h3>
                                        <p className="card-description">Agents de sécurité expérimentés pour votre sécurité personnelle.</p>
                                    </div>
                                    <div className="expertise-card">
                                        <div className="card-visual">
                                            <FontAwesomeIcon icon={faTruck} className="card-main-icon" />
                                        </div>
                                        <h3 className="card-title">{t("activities.publicWorks")}</h3>
                                        <p className="card-description">Transport sécurisé de fonds et valeurs.</p>
                                    </div>
                                    <div className="expertise-card">
                                        <div className="card-visual">
                                            <FontAwesomeIcon icon={faVideo} className="card-main-icon" />
                                        </div>
                                        <h3 className="card-title">Vidéosurveillance</h3>
                                        <p className="card-description">Installation et maintenance de systèmes de caméra.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="expertise-section">
                                <div className="section-header">
                                    <FontAwesomeIcon icon={faWalkieTalkie} className="section-icon" />
                                    <h2 className="section-title">{t("activities.businessSectors")}</h2>
                                </div>
                                <div className="expertise-grid">
                                    <div className="expertise-card">
                                        <div className="card-visual">
                                            <FontAwesomeIcon icon={faWalkieTalkie} className="card-main-icon" />
                                        </div>
                                        <h3 className="card-title">{t("activities.healthInfrastructure")}</h3>
                                        <p className="card-description">Radios MOTOROLA GPS 240 (portée 85km)</p>
                                    </div>
                                    <div className="expertise-card">
                                        <div className="card-visual">
                                            <FontAwesomeIcon icon={faCar} className="card-main-icon" />
                                        </div>
                                        <h3 className="card-title">{t("activities.educationalInfrastructure")}</h3>
                                        <p className="card-description">13 Véhicules et 5 Motos d'intervention</p>
                                    </div>
                                    <div className="expertise-card">
                                        <div className="card-visual">
                                            <FontAwesomeIcon icon={faDog} className="card-main-icon" />
                                        </div>
                                        <h3 className="card-title">{t("activities.personalProjects")}</h3>
                                        <p className="card-description">Chiens dressés, Détecteurs de métaux, Armement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="data-container">
                            <div className="data-title">{t("activities.discoverNumbers")}</div>
                            <div className="card-container">
                                <div className="card">
                                    <FontAwesomeIcon icon={faUserSecret} className="card-icon" />
                                    <div className="card-title">2</div>
                                    {t("activities.employees")} <br /> (Titulaires & Postulants)
                                </div>
                                <div className="card">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="card-icon" />
                                    <div className="card-title">30+</div>
                                    {t("activities.technicalStaff")}
                                </div>
                                <div className="card">
                                    <FontAwesomeIcon icon={faShieldAlt} className="card-icon" />
                                    <div className="card-title">100%</div>
                                    {t("activities.riskPrevention")}
                                </div>
                                <div className="card">
                                    <FontAwesomeIcon icon={faCar} className="card-icon" />
                                    <div className="card-title">24h/24</div>
                                    {t("activities.expertise")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default ActivitesEcons;
