import React from "react";
import { faNetworkWired, faHandshake } from "@fortawesome/free-solid-svg-icons"; // Icons for fallback

import Project from "./project";
import INFO from "../../data/user";
import "./styles/allProjects.css";

const AllProjects = () => {

	// Icon Mapping
	const iconMap = {
		"network": faNetworkWired,
		"handshake": faHandshake
	};

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						icon={iconMap[project.icon]} // Resolve icon string
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
