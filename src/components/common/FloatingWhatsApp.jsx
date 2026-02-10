import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";
import "./styles/floatingWhatsApp.css";

const FloatingWhatsApp = () => {
    // Format phone number for API (remove spaces, ensure no + if needed, usually just digits)
    // Assuming INFO.socials.telephone1 is mobile and has whatsapp. 
    // Format: +221 77 ... -> 22177...
    const phoneNumber = INFO.socials.telephone1.replace(/\D/g, "");
    const message = "Bonjour, je souhaite obtenir des informations sur vos services de sécurité.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
        >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
            <span className="whatsapp-text">Discutez avec nous</span>
        </a>
    );
};

export default FloatingWhatsApp;
