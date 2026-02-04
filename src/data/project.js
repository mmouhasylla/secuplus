import React from "react";

function project_1() {
    return {
        title: "Centre Internationale de Cancerologie de Dakar (CICD)",
        description:
            "Ce centre fais partie d'un projet de construction de plusieurs centres de radiothérapie pour le traitement du cancer implantées en afrique" +
            "Notamment au Senegal, Benin & Rwanda",
        logo: "./logo_cicd.png",
        linkText: "Voir le projet",
        link: "https://dakar.radiotherapie-afrique.com/",
        body: (
            <React.Fragment>
                <div className="article-content">
                    <div className="paragraph">Contenu du projet du centre de cancer de Dakar</div>
                    <img
                        src="./logo_cicd.png"
                        alt="cicd"
                        className="project_logo"
                    />
                </div>
            </React.Fragment>
        ),
    };
}

function project_2() {
    return {
        title: "ARAMIA",
			description:
				"La résidence ARAMIA est implantée sur un lotissement de 665 m2 et comprend un sous-sol sur la totalité de sa surface." +
				"Cette résidence est pensée sur une surface de 565 m2 avec son parvis d'espaces verts.",
			logo: "./logo_startimmo.jpg",
			linkText: "Voir le projet",
			link: "https://startimmosenegal.sn/aramia-la-residence/",        body: (
            <React.Fragment>
                <h1>Contenu du projet d'une residence de luxe a Mermoz, Dakar, Senegal.</h1>
            </React.Fragment>
        ),
    };
}

const myProjects = [project_1, project_2];

export default myProjects;
