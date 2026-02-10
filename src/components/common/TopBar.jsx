import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";
import "./styles/topBar.css";
import Logo from "./logo";

const TopBar = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-container">
				<div className="top-bar-logo">
					<Logo width={140} />
				</div>
				<div className="top-bar-contacts">
					<div className="contact-item">
						<FontAwesomeIcon icon={faPhone} className="contact-icon" />
						<span>{INFO.socials.telephone3}</span>
					</div>
					<div className="contact-item">
						<FontAwesomeIcon icon={faMobileAlt} className="contact-icon" />
						<span>{INFO.socials.telephone1}</span>
					</div>
					<div className="contact-item hidden-mobile">
						<FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
						<span>Dakar, Sénégal</span>
					</div>
					<div className="contact-item hidden-mobile">
						<FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
						<span>{INFO.main.email}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
