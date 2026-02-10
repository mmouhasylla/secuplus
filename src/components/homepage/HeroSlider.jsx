import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./styles/heroSlider.css";

// Slide configuration data (Structure only)
const SLIDES_CONFIG = [
    { id: 1, key: "slide1", bgColor: "#1e293b", link: "/services" },
    { id: 2, key: "slide2", bgColor: "#0f172a", link: "/technologies" },
    { id: 3, key: "slide3", bgColor: "#374151", link: "/services#convoyage" },
    { id: 4, key: "slide4", bgColor: "#111827", link: "/secteurs" }
];

/**
 * HeroSlider Component
 * Displays a rotating carousel of hero slides with animations.
 * Uses translations for title, subtitle, service, and CTA.
 */
const HeroSlider = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === SLIDES_CONFIG.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === SLIDES_CONFIG.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? SLIDES_CONFIG.length - 1 : prev - 1));
    };

    return (
        <div className="hero-slider">
            {SLIDES_CONFIG.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? "active" : ""}`}
                    style={{ backgroundColor: slide.bgColor }}
                >
                    <div className="slide-content">
                        <h1 className="slide-title">
                            {t(`hero.${slide.key}.title`)} <br />
                            <span>{t(`hero.${slide.key}.subtitle`)}</span>
                        </h1>
                        <p className="slide-service">{t(`hero.${slide.key}.service`)}</p>
                        <Link to={slide.link} className="slide-cta">
                            {t(`hero.${slide.key}.cta`)}
                        </Link>
                    </div>
                </div>
            ))}

            <button className="slider-arrow left" onClick={prevSlide} aria-label="Previous Slide">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="slider-arrow right" onClick={nextSlide} aria-label="Next Slide">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className="slider-dots">
                {SLIDES_CONFIG.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
