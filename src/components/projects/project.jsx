import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link || "#"}>
					<div className="project-container">
						<div className="project-logo">
							{logo ? (
								<img src={logo} alt="logo" />
							) : (
								<div className="project-icon-placeholder">
									<FontAwesomeIcon icon={props.icon} style={{ fontSize: "30px", color: "#000000" }} />
								</div>
							)}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						{link && (
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">{linkText}</div>
							</div>
						)}
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
