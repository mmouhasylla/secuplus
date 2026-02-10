import React from "react";
import CONTENT from "../../data/content";
import "./styles/techGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faMobileAlt, faPlane, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

/**
 * TechGrid Component
 * Displays technology items in a grid with icons and status badges.
 */
const TechGrid = () => {
    const { t } = useTranslation();

    // Map icon keys to FontAwesome icons
    const getIcon = (key) => {
        switch (key) {
            case "video_ia": return faVideo;
            case "rondes_nfc": return faMobileAlt;
            case "drones": return faPlane;
            case "iot": return faNetworkWired;
            default: return faVideo;
        }
    };

    return (
        <div className="tech-grid">
            {CONTENT.technologies.items.map((item, index) => (
                <div key={index} className="tech-card">
                    <div className="tech-icon-wrapper">
                        <FontAwesomeIcon icon={getIcon(item.iconKey)} />
                    </div>
                    <h3>{t(item.titleKey)}</h3>
                    <p>{t(item.descKey)}</p>
                    <span className={`status-badge ${t(item.statusKey) === "Bientôt" || t(item.statusKey) === "Coming Soon" ? "soon" : "live"}`}>
                        {t(item.statusKey)}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TechGrid;
