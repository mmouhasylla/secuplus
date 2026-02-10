import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/statsBand.css";

/**
 * StatsBand Component
 * Displays key company statistics (Clients, Experience, etc.)
 */
const StatsBand = () => {
    const { t } = useTranslation();

    return (
        <div className="stats-band">
            <div className="stats-container">
                <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">{t("stats.clients")}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">{t("stats.experience")}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">{t("stats.availability")}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">{t("stats.quality")}</span>
                </div>
            </div>
        </div>
    );
};

export default StatsBand;
