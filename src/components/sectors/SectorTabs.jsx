import React, { useState } from 'react';
import CONTENT from '../../data/content';
import './styles/sectorTabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faPassport, faIndustry, faHome, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

/**
 * SectorTabs Component
 * Displays sector details in a tabbed interface with icons and features list.
 */
const SectorTabs = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(CONTENT.sectors.items[0].id);
    const activeItem = CONTENT.sectors.items.find(item => item.id === activeTab);

    // Map images string to icons
    const getIcon = (img) => {
        switch (img) {
            case 'bank': return faUniversity;
            case 'diplomacy': return faPassport;
            case 'industry': return faIndustry;
            case 'residence': return faHome;
            default: return faShieldHalved;
        }
    };

    return (
        <div className="sector-tabs">
            <div className="tabs-header">
                {CONTENT.sectors.items.map(item => (
                    <button
                        key={item.id}
                        className={`tab-btn ${item.id === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        {t(item.titleKey)}
                    </button>
                ))}
            </div>

            <div className="tab-content-wrapper">
                <div key={activeItem.id} className="tab-content fade-in">
                    <div className="tab-icon-large">
                        <FontAwesomeIcon icon={getIcon(activeItem.image)} />
                    </div>
                    <div className="tab-text">
                        <h2>{t(activeItem.titleKey)}</h2>
                        <p className="tab-desc-lead">{t(activeItem.descKey)}</p>

                        <div className="tab-details">
                            <h3>{t("sectors.solutions_title")}</h3>
                            <ul className="tab-features-list">
                                <li>{t("sectors.common_features.analysis")}</li>
                                <li>{t("sectors.common_features.staff")} {t(activeItem.titleKey)}</li>
                                <li>{t("sectors.common_features.supervision")}</li>
                                <li>{t("sectors.common_features.tech")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectorTabs;
