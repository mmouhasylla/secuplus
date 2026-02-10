
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/serviceTimeline.css";

/**
 * ServiceTimeline Component
 * Displays a vertical timeline of process steps for a service.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.steps - Array of step objects containing titleKey and descKey
 */
const ServiceTimeline = ({ steps }) => {
    const { t } = useTranslation();

    return (
        <div className="service-timeline">
            {steps.map((step, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-marker">{step.step}</div>
                    <div className="timeline-content">
                        <h4>{t(step.titleKey)}</h4>
                        <p>{t(step.descKey)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceTimeline;
