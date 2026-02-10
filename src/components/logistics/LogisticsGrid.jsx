import React from "react";
import CONTENT from "../../data/content";
import "./styles/logisticsGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faTruck, faHeadset, faWalkieTalkie } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

/**
 * LogisticsGrid Component
 * Displays logistical resources in a grid format with counts and descriptions.
 */
const LogisticsGrid = () => {
    const { t } = useTranslation();

    const getIcon = (key) => {
        switch (key) {
            case "vehicles": return faCar;
            case "trucks": return faTruck;
            case "control_center": return faHeadset;
            case "radios": return faWalkieTalkie;
            default: return faCar;
        }
    };

    return (
        <div className="logistics-grid">
            {CONTENT.logistics.items.map((item, index) => (
                <div key={index} className="logistics-card">
                    <div className="logistics-icon-wrapper">
                        <FontAwesomeIcon icon={getIcon(item.iconKey)} />
                    </div>
                    <div className="logistics-number">{item.count}</div>
                    <h3>{t(item.titleKey)}</h3>
                    <p>{t(item.descKey)}</p>
                </div>
            ))}
        </div>
    );
};

export default LogisticsGrid;
