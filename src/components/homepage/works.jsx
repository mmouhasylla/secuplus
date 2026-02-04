import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<a href="https://dakar.radiotherapie-afrique.com/" target="_blank" rel="noopener noreferrer">
							<div className="work">
								<img
									src="./logo_cicd.png"
									alt="CICD"
									className="work-image"
								/>
								<div className="work-title">CICD</div>
								<div className="work-subtitle">
									Centre de radiotherapie
								</div>
								<div className="work-duration">2016 - 2018</div>
							</div>
						</a>

						<a href="https://cliniquebellevue.sn/" target="_blank" rel="noopener noreferrer">
							<div className="work">
								<img
									src="./logo_bellevue.png"
									alt="Bellevue"
									className="work-image"
								/>
								<div className="work-title">Clinique Bellevue</div>
								<div className="work-subtitle">
									Anciennement clinique de la vision
								</div>
								<div className="work-duration">2011 - 2012</div>
							</div>
						</a>
					</div>

				}
			/>
		</div >
	);
};

export default Works;
