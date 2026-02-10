const CONTENT = {
    services: {
        title: "services.title",
        items: [
            {
                id: 1,
                titleKey: "services.items.gardiennage.title",
                descKey: "services.items.gardiennage.description",
                link: "/services#gardiennage",
                process: [
                    { step: 1, titleKey: "services.items.gardiennage.process.step1.title", descKey: "services.items.gardiennage.process.step1.desc" },
                    { step: 2, titleKey: "services.items.gardiennage.process.step2.title", descKey: "services.items.gardiennage.process.step2.desc" },
                    { step: 3, titleKey: "services.items.gardiennage.process.step3.title", descKey: "services.items.gardiennage.process.step3.desc" },
                    { step: 4, titleKey: "services.items.gardiennage.process.step4.title", descKey: "services.items.gardiennage.process.step4.desc" }
                ]
            },
            {
                id: 2,
                titleKey: "services.items.convoyage.title",
                descKey: "services.items.convoyage.description",
                link: "/services#convoyage",
                process: [
                    { step: 1, titleKey: "services.items.convoyage.process.step1.title", descKey: "services.items.convoyage.process.step1.desc" },
                    { step: 2, titleKey: "services.items.convoyage.process.step2.title", descKey: "services.items.convoyage.process.step2.desc" },
                    { step: 3, titleKey: "services.items.convoyage.process.step3.title", descKey: "services.items.convoyage.process.step3.desc" },
                    { step: 4, titleKey: "services.items.convoyage.process.step4.title", descKey: "services.items.convoyage.process.step4.desc" }
                ]
            },
            {
                id: 3,
                titleKey: "services.items.evenementiel.title",
                descKey: "services.items.evenementiel.description",
                link: "/services#evenementiel",
                process: [
                    { step: 1, titleKey: "services.items.evenementiel.process.step1.title", descKey: "services.items.evenementiel.process.step1.desc" },
                    { step: 2, titleKey: "services.items.evenementiel.process.step2.title", descKey: "services.items.evenementiel.process.step2.desc" },
                    { step: 3, titleKey: "services.items.evenementiel.process.step3.title", descKey: "services.items.evenementiel.process.step3.desc" },
                    { step: 4, titleKey: "services.items.evenementiel.process.step4.title", descKey: "services.items.evenementiel.process.step4.desc" }
                ]
            },
            {
                id: 4,
                titleKey: "services.items.surveillance.title",
                descKey: "services.items.surveillance.description",
                link: "/services#surveillance",
                process: [
                    { step: 1, titleKey: "services.items.surveillance.process.step1.title", descKey: "services.items.surveillance.process.step1.desc" },
                    { step: 2, titleKey: "services.items.surveillance.process.step2.title", descKey: "services.items.surveillance.process.step2.desc" },
                    { step: 3, titleKey: "services.items.surveillance.process.step3.title", descKey: "services.items.surveillance.process.step3.desc" },
                    { step: 4, titleKey: "services.items.surveillance.process.step4.title", descKey: "services.items.surveillance.process.step4.desc" }
                ]
            },
            {
                id: 5,
                titleKey: "services.items.incendie.title",
                descKey: "services.items.incendie.description",
                link: "/services#incendie",
                process: [
                    { step: 1, titleKey: "services.items.incendie.process.step1.title", descKey: "services.items.incendie.process.step1.desc" },
                    { step: 2, titleKey: "services.items.incendie.process.step2.title", descKey: "services.items.incendie.process.step2.desc" },
                    { step: 3, titleKey: "services.items.incendie.process.step3.title", descKey: "services.items.incendie.process.step3.desc" },
                    { step: 4, titleKey: "services.items.incendie.process.step4.title", descKey: "services.items.incendie.process.step4.desc" }
                ]
            }
        ]
    },
    sectors: {
        title: "sectors.title",
        items: [
            {
                id: 1,
                titleKey: "sectors.items.bancaire.title",
                key: "bancaire",
                link: "/secteurs#bancaire",
                image: "bank",
                descKey: "sectors.items.bancaire.desc"
            },
            {
                id: 2,
                titleKey: "sectors.items.diplomatie.title",
                key: "diplomatie",
                link: "/secteurs#diplomatie",
                image: "diplomacy",
                descKey: "sectors.items.diplomatie.desc"
            },
            {
                id: 3,
                titleKey: "sectors.items.industriel.title",
                key: "industriel",
                link: "/secteurs#industriel",
                image: "industry",
                descKey: "sectors.items.industriel.desc"
            },
            {
                id: 4,
                titleKey: "sectors.items.residentiel.title",
                key: "residentiel",
                link: "/secteurs#residentiel",
                image: "residence",
                descKey: "sectors.items.residentiel.desc"
            }
        ]
    },
    technologies: {
        title: "technologies.title",
        items: [
            { titleKey: "technologies.items.video_ia.title", descKey: "technologies.items.video_ia.desc", statusKey: "technologies.items.video_ia.status", iconKey: "video_ia" },
            { titleKey: "technologies.items.rondes_nfc.title", descKey: "technologies.items.rondes_nfc.desc", statusKey: "technologies.items.rondes_nfc.status", iconKey: "rondes_nfc" },
            { titleKey: "technologies.items.drones.title", descKey: "technologies.items.drones.desc", statusKey: "technologies.items.drones.status", iconKey: "drones" },
            { titleKey: "technologies.items.iot.title", descKey: "technologies.items.iot.desc", statusKey: "technologies.items.iot.status", iconKey: "iot" }
        ]
    },
    logistics: {
        title: "logistics.title",
        items: [
            { titleKey: "logistics.items.vehicles.title", count: "20+", descKey: "logistics.items.vehicles.desc", iconKey: "vehicles" },
            { titleKey: "logistics.items.trucks.title", count: "10+", descKey: "logistics.items.trucks.desc", iconKey: "trucks" },
            { titleKey: "logistics.items.control_center.title", count: "1", descKey: "logistics.items.control_center.desc", iconKey: "control_center" },
            { titleKey: "logistics.items.radios.title", count: "100+", descKey: "logistics.items.radios.desc", iconKey: "radios" }
        ]
    },
    careers: {
        title: "careers.title",
        benefits: [
            "careers.benefits.training", "careers.benefits.career", "careers.benefits.health", "careers.benefits.bonus"
        ],
        jobs: [
            { titleKey: "careers.jobs.agent.title", location: "Dakar", typeKey: "careers.jobs.agent.type" },
            { titleKey: "careers.jobs.team_leader.title", location: "Saly", typeKey: "careers.jobs.team_leader.type" },
            { titleKey: "careers.jobs.operator.title", location: "Dakar", typeKey: "careers.jobs.operator.type" }
        ]
    }
};

export default CONTENT;
