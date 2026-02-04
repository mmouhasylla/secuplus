import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	// Format universel pour ouvrir l'application de carte par défaut
	const getMapsUrl = (address) => {
		const encodedAddress = encodeURIComponent(address);
		return `https://maps.google.com/?q=${encodedAddress}`;
	};

	return (
		<div className="socials">
			{/* Téléphone */}
			<div className="social">
				<div className="social-wrapper">
					<FontAwesomeIcon icon={faMobile} className="social-icon" />
					<div className="social-numbers">
						<a href={`tel:${INFO.socials.telephone1}`} target="_blank" rel="noreferrer">
							<div className="social-text">{INFO.socials.telephone1}</div>
						</a>
						<a href={`tel:${INFO.socials.telephone2}`} target="_blank" rel="noreferrer">
							<div className="social-text">{INFO.socials.telephone2}</div>
						</a>
						<a href={`tel:${INFO.socials.telephone3}`} target="_blank" rel="noreferrer">
							<div className="social-text">{INFO.socials.telephone3}</div>
						</a>
					</div>
				</div>
			</div>

			{/* Email */}
			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faEnvelope} className="social-icon" />
						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>

			{/* Adresse - MODIFIÉ */}
			<div className="address">
				<div className="address-wrapper">
					<a
						href={getMapsUrl(INFO.main.address)}
						target="_blank"
						rel="noopener noreferrer"
						className="address-link"
					>
						<FontAwesomeIcon icon={faMapMarkerAlt} className="social-icon" />
						<div className="social-text">{INFO.main.address}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
