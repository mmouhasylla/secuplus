import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCertificate, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./styles/trustBar.css";

/**
 * TrustBar Component
 * Displays certifications and trust indicators.
 */
const TrustBar = () => {
    const { t } = useTranslation();

    return (
        <div className="trust-bar">
            <div className="trust-container">
                <div className="trust-item">
                    <FontAwesomeIcon icon={faCertificate} className="trust-icon" />
                    <span>{t("trust.iso")}</span>
                </div>
                <div className="trust-item">
                    <FontAwesomeIcon icon={faCheckCircle} className="trust-icon" />
                    <span>{t("trust.cnaps")}</span>
                </div>
                <div className="trust-item">
                    <FontAwesomeIcon icon={faShieldHalved} className="trust-icon" />
                    <span>{t("trust.insurance")}</span>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
